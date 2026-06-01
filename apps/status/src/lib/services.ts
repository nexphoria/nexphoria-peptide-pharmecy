export type ServiceStatus = "operational" | "degraded" | "outage" | "unknown";

export interface Service {
  id: string;
  name: string;
  description: string;
  url: string;
  expectedStatus: number;
}

export interface ServiceResult {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  latencyMs: number | null;
  checkedAt: string;
}

export const SERVICES: Service[] = [
  {
    id: "website",
    name: "Website",
    description: "nexphoria.com main storefront",
    url: "https://nexphoria.com",
    expectedStatus: 200,
  },
  {
    id: "checkout",
    name: "Checkout",
    description: "Cart and order flow",
    url: "https://nexphoria.com/checkout",
    expectedStatus: 200,
  },
  {
    id: "api",
    name: "API",
    description: "Product data and search endpoints",
    url: "https://nexphoria.com/api/products",
    expectedStatus: 200,
  },
];

export async function checkService(service: Service): Promise<ServiceResult> {
  const start = Date.now();
  let status: ServiceStatus = "unknown";
  let latencyMs: number | null = null;

  try {
    const res = await fetch(service.url, {
      method: "HEAD",
      next: { revalidate: 0 },
      signal: AbortSignal.timeout(8000),
    });
    latencyMs = Date.now() - start;
    if (res.status === service.expectedStatus || res.status < 400) {
      status = latencyMs > 3000 ? "degraded" : "operational";
    } else {
      status = res.status >= 500 ? "outage" : "degraded";
    }
  } catch {
    latencyMs = null;
    status = "outage";
  }

  return {
    id: service.id,
    name: service.name,
    description: service.description,
    status,
    latencyMs,
    checkedAt: new Date().toISOString(),
  };
}

export async function checkAllServices(): Promise<ServiceResult[]> {
  return Promise.all(SERVICES.map(checkService));
}

export function overallStatus(results: ServiceResult[]): ServiceStatus {
  if (results.some((r) => r.status === "outage")) return "outage";
  if (results.some((r) => r.status === "degraded")) return "degraded";
  if (results.every((r) => r.status === "operational")) return "operational";
  return "unknown";
}

export const STATUS_LABEL: Record<ServiceStatus, string> = {
  operational: "Operational",
  degraded: "Degraded Performance",
  outage: "Major Outage",
  unknown: "Checking…",
};

export const STATUS_COLOR: Record<ServiceStatus, string> = {
  operational: "#22c55e",
  degraded: "#f59e0b",
  outage: "#ef4444",
  unknown: "#6b7280",
};
