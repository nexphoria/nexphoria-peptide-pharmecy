export type IncidentSeverity = "minor" | "major" | "critical";
export type IncidentStatus =
  | "investigating"
  | "identified"
  | "monitoring"
  | "resolved";

export interface IncidentUpdate {
  status: IncidentStatus;
  message: string;
  createdAt: string;
}

export interface Incident {
  id: string;
  title: string;
  severity: IncidentSeverity;
  affectedServices: string[];
  updates: IncidentUpdate[];
  createdAt: string;
  resolvedAt?: string;
}

export interface Maintenance {
  id: string;
  title: string;
  description: string;
  affectedServices: string[];
  scheduledStart: string;
  scheduledEnd: string;
}

export interface IncidentData {
  incidents: Incident[];
  maintenances: Maintenance[];
}

export function activeIncidents(data: IncidentData): Incident[] {
  return data.incidents.filter((i) => !i.resolvedAt);
}

export function recentIncidents(
  data: IncidentData,
  days = 30
): Incident[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return data.incidents.filter(
    (i) => i.resolvedAt && new Date(i.resolvedAt) > cutoff
  );
}

export function upcomingMaintenances(data: IncidentData): Maintenance[] {
  const now = new Date().toISOString();
  return data.maintenances.filter((m) => m.scheduledEnd > now);
}

export const SEVERITY_LABEL: Record<IncidentSeverity, string> = {
  minor: "Minor",
  major: "Major",
  critical: "Critical",
};

export const INCIDENT_STATUS_LABEL: Record<IncidentStatus, string> = {
  investigating: "Investigating",
  identified: "Identified",
  monitoring: "Monitoring",
  resolved: "Resolved",
};
