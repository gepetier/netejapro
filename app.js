const dayNames = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres"];
const monthNames = [
  "Gener",
  "Febrer",
  "Marc",
  "Abril",
  "Maig",
  "Juny",
  "Juliol",
  "Agost",
  "Setembre",
  "Octubre",
  "Novembre",
  "Desembre",
];
const zoneNames = ["Centre", "Nord", "Sud", "Llevant", "Ponent"];
const roleNames = ["Operari/a", "Especialista", "Supervisor/a"];
const contractTypeNames = ["Indefinit", "Temporal", "Autonom/a", "Substitucio"];
const workerStatusNames = ["Actiu", "Baixa", "Vacances", "No disponible"];
const transportNames = ["Sense vehicle", "Cotxe", "Moto", "Furgoneta"];
const preferredShiftNames = ["Indiferent", "Matins", "Tardes", "Jornada partida"];
const recurrenceTypeNames = {
  weekly: "Setmanal",
  biweekly: "Cada 2 setmanes",
  monthly: "Mensual",
  annual: "Anual",
  seasonal: "Temporada",
};
const travelBufferOptions = [
  { label: "Sense marge", value: 0 },
  { label: "15 min", value: 15 },
  { label: "30 min", value: 30 },
  { label: "45 min", value: 45 },
];
const scoreNames = ["1", "2", "3", "4", "5"];
const skillNames = [
  { id: "keys", label: "Claus" },
  { id: "vehicle", label: "Vehicle propi" },
  { id: "windows", label: "Vidres" },
  { id: "sanitary", label: "Sanitari" },
  { id: "stairs", label: "Escales" },
  { id: "laundry", label: "Bugaderia" },
  { id: "industrial", label: "Industrial" },
  { id: "ownProducts", label: "Productes propis" },
];
const serviceTypeNames = [
  { id: "offices", label: "Oficines" },
  { id: "communities", label: "Comunitats" },
  { id: "clinics", label: "Cliniques" },
  { id: "shops", label: "Botigues" },
  { id: "apartments", label: "Apartaments" },
  { id: "warehouses", label: "Naus" },
];
const storageKey = "neteja-pro-state-v2";
const legacyStorageKey = "neteja-pro-state-v1";

const seedState = {
  weekStart: formatDateInput(getMonday(new Date())),
  calendarYear: new Date().getFullYear(),
  calendarClient: "all",
  calendarStatus: "all",
  calendarSelectedDate: formatDateInput(new Date()),
  calendarRangeStart: formatDateInput(getMonday(new Date())),
  calendarRangeEnd: formatDateInput(addDays(getMonday(new Date()), 30)),
  dashboardDate: formatDateInput(new Date()),
  draftMode: false,
  developerMode: false,
  draftAssignments: {},
  clientStatusFilter: "active",
  workerStatusFilter: "active",
  selectedClient: "",
  selectedWorkerId: "",
  clientStatuses: {},
  clientProfiles: {},
  serviceLogs: [],
  filter: "all",
  plannerSearch: "",
  vacations: {
    clients: [],
    workers: [],
  },
  workers: [
    {
      id: "w1",
      name: "Marta Serra",
      status: "Actiu",
      zones: ["Centre", "Nord"],
      homeZone: "Centre",
      role: "Operari/a",
      contractType: "Indefinit",
      transport: "Cotxe",
      skills: ["keys", "windows", "ownProducts"],
      serviceTypes: ["offices", "shops", "communities"],
      history: {
        "Oficines Tramuntana": { visits: 14, lastVisit: "2026-04-27", preferenceFit: 5 },
        "Botiga Es Born": { visits: 3, lastVisit: "2026-04-16", preferenceFit: 4 },
      },
      maxHours: 32,
      maxDailyHours: 8,
      acceptsOvertime: false,
      hourlyCost: 14,
      preferredShift: "Matins",
      travelBuffer: 15,
      experience: 4,
      quality: 5,
      reliability: 5,
      availability: {
        Dilluns: [["08:00", "15:00"]],
        Dimarts: [["08:00", "15:00"]],
        Dimecres: [["09:00", "14:00"]],
        Dijous: [["08:00", "16:00"]],
        Divendres: [["08:00", "13:00"]],
      },
    },
    {
      id: "w2",
      name: "Pau Riera",
      status: "Actiu",
      zones: ["Centre", "Llevant"],
      homeZone: "Llevant",
      role: "Operari/a",
      contractType: "Temporal",
      transport: "Moto",
      skills: ["stairs", "ownProducts"],
      serviceTypes: ["communities", "offices", "shops"],
      history: {
        "Comunitat Mar": { visits: 9, lastVisit: "2026-04-29", preferenceFit: 4 },
      },
      maxHours: 28,
      maxDailyHours: 7,
      acceptsOvertime: true,
      hourlyCost: 13,
      preferredShift: "Tardes",
      travelBuffer: 15,
      experience: 3,
      quality: 4,
      reliability: 4,
      availability: {
        Dilluns: [["10:00", "18:00"]],
        Dimarts: [["10:00", "18:00"]],
        Dimecres: [["10:00", "18:00"]],
        Dijous: [["10:00", "18:00"]],
        Divendres: [["09:00", "15:00"]],
      },
    },
    {
      id: "w3",
      name: "Laia Vidal",
      status: "Actiu",
      zones: ["Sud", "Ponent", "Centre"],
      homeZone: "Sud",
      role: "Especialista",
      contractType: "Indefinit",
      transport: "Furgoneta",
      skills: ["vehicle", "laundry", "industrial", "ownProducts"],
      serviceTypes: ["apartments", "warehouses", "offices"],
      history: {
        "Nau Ponent": { visits: 6, lastVisit: "2026-04-24", preferenceFit: 5 },
        "Apartaments Sol": { visits: 2, lastVisit: "2026-04-18", preferenceFit: 4 },
      },
      maxHours: 24,
      maxDailyHours: 8,
      acceptsOvertime: false,
      hourlyCost: 16,
      preferredShift: "Indiferent",
      travelBuffer: 30,
      experience: 5,
      quality: 4,
      reliability: 4,
      availability: {
        Dilluns: [["07:00", "13:00"]],
        Dimecres: [["07:00", "13:00"]],
        Dijous: [["12:00", "18:00"]],
        Divendres: [["08:00", "14:00"]],
      },
    },
    {
      id: "w4",
      name: "Nadia Ferrer",
      status: "Actiu",
      zones: ["Nord", "Ponent"],
      homeZone: "Nord",
      role: "Especialista",
      contractType: "Autonom/a",
      transport: "Cotxe",
      skills: ["sanitary", "keys", "windows"],
      serviceTypes: ["clinics", "offices", "shops"],
      history: {
        "Clinica Nord": { visits: 12, lastVisit: "2026-04-28", preferenceFit: 5 },
      },
      maxHours: 20,
      maxDailyHours: 6,
      acceptsOvertime: true,
      hourlyCost: 18,
      preferredShift: "Matins",
      travelBuffer: 30,
      experience: 4,
      quality: 5,
      reliability: 4,
      availability: {
        Dimarts: [["07:00", "12:00"]],
        Dimecres: [["08:00", "16:00"]],
        Dijous: [["08:00", "12:00"]],
        Divendres: [["11:00", "18:00"]],
      },
    },
  ],
  services: [
    makeSeedService("s1", "r1", "Oficines Tramuntana", "Centre", "Dilluns", "08:30", "10:30", "Alta", "claus", "w1"),
    makeSeedService("s2", "r2", "Clinica Nord", "Nord", "Dimarts", "07:30", "10:30", "Alta", "material sanitari", "w4"),
    makeSeedService("s3", "r3", "Comunitat Mar", "Llevant", "Dimarts", "13:00", "16:00", "Mitjana", "escales", "w2"),
    makeSeedService("s4", "r4", "Botiga Es Born", "Centre", "Dimecres", "09:30", "11:30", "Mitjana", "vidres", ""),
    makeSeedService("s5", "r5", "Nau Ponent", "Ponent", "Dijous", "13:00", "17:00", "Alta", "vehicle", "w3"),
    makeSeedService("s6", "r6", "Apartaments Sol", "Sud", "Divendres", "09:00", "13:00", "Baixa", "bugaderia", ""),
  ],
};

let state = loadState();
let pendingAutoAssignment = null;

const els = {
  viewTitle: document.querySelector("#viewTitle"),
  weekStart: document.querySelector("#weekStart"),
  assignmentScore: document.querySelector("#assignmentScore"),
  draftMode: document.querySelector("#draftMode"),
  developerMode: document.querySelector("#developerMode"),
  confirmDraft: document.querySelector("#confirmDraft"),
  discardDraft: document.querySelector("#discardDraft"),
  draftScorePreview: document.querySelector("#draftScorePreview"),
  draftComparisonPanel: document.querySelector("#draftComparisonPanel"),
  draftComparisonCount: document.querySelector("#draftComparisonCount"),
  draftComparisonList: document.querySelector("#draftComparisonList"),
  coordinationMode: document.querySelector("#coordinationMode"),
  coordinationSummary: document.querySelector("#coordinationSummary"),
  coordinationAssignments: document.querySelector("#coordinationAssignments"),
  metrics: document.querySelector("#metrics"),
  dashboardDate: document.querySelector("#dashboardDate"),
  dashboardToday: document.querySelector("#dashboardToday"),
  dashboardNextServiceDay: document.querySelector("#dashboardNextServiceDay"),
  dashboardDaySummary: document.querySelector("#dashboardDaySummary"),
  dashboardDayCount: document.querySelector("#dashboardDayCount"),
  dashboardDayPlan: document.querySelector("#dashboardDayPlan"),
  serviceCount: document.querySelector("#serviceCount"),
  conflictCount: document.querySelector("#conflictCount"),
  upcomingServices: document.querySelector("#upcomingServices"),
  conflicts: document.querySelector("#conflicts"),
  weekGrid: document.querySelector("#weekGrid"),
  plannerWeekTitle: document.querySelector("#plannerWeekTitle"),
  plannerWeekRange: document.querySelector("#plannerWeekRange"),
  plannerPrevWeek: document.querySelector("#plannerPrevWeek"),
  plannerCurrentWeek: document.querySelector("#plannerCurrentWeek"),
  plannerNextWeek: document.querySelector("#plannerNextWeek"),
  plannerSearch: document.querySelector("#plannerSearch"),
  calendarYear: document.querySelector("#calendarYear"),
  calendarClientFilter: document.querySelector("#calendarClientFilter"),
  calendarStatusFilter: document.querySelector("#calendarStatusFilter"),
  calendarRangeStart: document.querySelector("#calendarRangeStart"),
  calendarRangeEnd: document.querySelector("#calendarRangeEnd"),
  calendarOptimizeRange: document.querySelector("#calendarOptimizeRange"),
  calendarSummary: document.querySelector("#calendarSummary"),
  calendarServiceCount: document.querySelector("#calendarServiceCount"),
  yearCalendar: document.querySelector("#yearCalendar"),
  calendarDetailTitle: document.querySelector("#calendarDetailTitle"),
  calendarDetailCount: document.querySelector("#calendarDetailCount"),
  calendarDayDetail: document.querySelector("#calendarDayDetail"),
  calendarDayModal: document.querySelector("#calendarDayModal"),
  calendarModalTitle: document.querySelector("#calendarModalTitle"),
  calendarModalSubtitle: document.querySelector("#calendarModalSubtitle"),
  calendarModalSummary: document.querySelector("#calendarModalSummary"),
  calendarModalServices: document.querySelector("#calendarModalServices"),
  calendarModalClose: document.querySelector("#calendarModalClose"),
  autoAssignModal: document.querySelector("#autoAssignModal"),
  autoAssignModalTitle: document.querySelector("#autoAssignModalTitle"),
  autoAssignModalSubtitle: document.querySelector("#autoAssignModalSubtitle"),
  autoAssignModalSummary: document.querySelector("#autoAssignModalSummary"),
  autoAssignModalChanges: document.querySelector("#autoAssignModalChanges"),
  autoAssignModalClose: document.querySelector("#autoAssignModalClose"),
  autoAssignConfirm: document.querySelector("#autoAssignConfirm"),
  autoAssignDiscard: document.querySelector("#autoAssignDiscard"),
  serviceForm: document.querySelector("#serviceForm"),
  serviceSubmitButton: document.querySelector("#serviceSubmitButton"),
  serviceCancelEdit: document.querySelector("#serviceCancelEdit"),
  newClient: document.querySelector("#newClient"),
  clientOverview: document.querySelector("#clientOverview"),
  clientDetailPanel: document.querySelector("#clientDetailPanel"),
  clientDetailTitle: document.querySelector("#clientDetailTitle"),
  clientDetailStatus: document.querySelector("#clientDetailStatus"),
  clientDetailActions: document.querySelector("#clientDetailActions"),
  clientDetailSummary: document.querySelector("#clientDetailSummary"),
  clientProfileForm: document.querySelector("#clientProfileForm"),
  clientProfileSubmitButton: document.querySelector("#clientProfileSubmitButton"),
  clientProfileCancelEdit: document.querySelector("#clientProfileCancelEdit"),
  clientProfileTable: document.querySelector("#clientProfileTable"),
  clientProfileCount: document.querySelector("#clientProfileCount"),
  serviceHistoryTable: document.querySelector("#serviceHistoryTable"),
  serviceHistoryCount: document.querySelector("#serviceHistoryCount"),
  serviceDays: document.querySelector("#serviceDays"),
  weeklyPreview: document.querySelector("#weeklyPreview"),
  newWorker: document.querySelector("#newWorker"),
  workerDetailPanel: document.querySelector("#workerDetailPanel"),
  workerDetailTitle: document.querySelector("#workerDetailTitle"),
  workerDetailActions: document.querySelector("#workerDetailActions"),
  workerDetailSummary: document.querySelector("#workerDetailSummary"),
  workerForm: document.querySelector("#workerForm"),
  workerFormTitle: document.querySelector("#workerFormTitle"),
  workerSubmitButton: document.querySelector("#workerSubmitButton"),
  workerCancelEdit: document.querySelector("#workerCancelEdit"),
  workerZones: document.querySelector("#workerZones"),
  workerSkills: document.querySelector("#workerSkills"),
  workerServiceTypes: document.querySelector("#workerServiceTypes"),
  workerAvailability: document.querySelector("#workerAvailability"),
  recurrenceTable: document.querySelector("#recurrenceTable"),
  clientRecurrenceCount: document.querySelector("#clientRecurrenceCount"),
  serviceTable: document.querySelector("#serviceTable"),
  workerTable: document.querySelector("#workerTable"),
  workerLoadTable: document.querySelector("#workerLoadTable"),
  clientServiceCount: document.querySelector("#clientServiceCount"),
  generatedServiceCount: document.querySelector("#generatedServiceCount"),
  workerCount: document.querySelector("#workerCount"),
  clientVacationForm: document.querySelector("#clientVacationForm"),
  workerVacationForm: document.querySelector("#workerVacationForm"),
  vacationCalendar: document.querySelector("#vacationCalendar"),
  vacationTable: document.querySelector("#vacationTable"),
  vacationCount: document.querySelector("#vacationCount"),
  toast: document.querySelector("#toast"),
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  els.weekStart.value = state.weekStart;
  els.draftMode.checked = Boolean(state.draftMode);
  els.developerMode.checked = Boolean(state.developerMode);
  els.dashboardDate.value = state.dashboardDate;
  els.serviceForm.elements.activeFrom.value = state.weekStart;
  if (els.plannerSearch) els.plannerSearch.value = state.plannerSearch || "";
  fillCalendarControls();
  fillZoneControls();
  fillDayControls();
  fillWorkerParameterControls();
  fillWorkerAvailabilityControls();
  fillClientProfileControls();
  bindEvents();
  updateWeeklyPreview();
  const initialView = ["dashboard", "planner", "calendar", "clients", "workers", "vacations", "options"].includes(location.hash.slice(1))
    ? location.hash.slice(1)
    : "dashboard";
  switchView(initialView, false);
  requestAnimationFrame(() => window.scrollTo(0, 0));
  render();
}

function bindEvents() {
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      persist();
      render();
    });
  });

  els.weekStart.addEventListener("change", () => {
    state.weekStart = els.weekStart.value;
    persist();
    render();
  });

  els.plannerPrevWeek.addEventListener("click", () => shiftPlannerWeek(-7));
  els.plannerCurrentWeek.addEventListener("click", () => setPlannerWeek(formatDateInput(getMonday(new Date()))));
  els.plannerNextWeek.addEventListener("click", () => shiftPlannerWeek(7));

  els.dashboardDate.addEventListener("change", () => {
    state.dashboardDate = els.dashboardDate.value;
    persist();
    renderDashboardDayPlan();
  });

  els.dashboardToday.addEventListener("click", () => {
    state.dashboardDate = formatDateInput(new Date());
    els.dashboardDate.value = state.dashboardDate;
    persist();
    renderDashboardDayPlan();
  });

  els.dashboardNextServiceDay.addEventListener("click", () => {
    const currentDate = state.dashboardDate || formatDateInput(new Date());
    const nextDate = nextServiceDateFrom(addDays(new Date(`${currentDate}T00:00:00`), 1));
    if (!nextDate) {
      showToast("No he trobat cap servei proper.");
      return;
    }
    state.dashboardDate = nextDate;
    els.dashboardDate.value = state.dashboardDate;
    persist();
    renderDashboardDayPlan();
  });

  if (els.plannerSearch) {
    els.plannerSearch.addEventListener("input", () => {
      state.plannerSearch = els.plannerSearch.value.trim();
      persist();
      renderPlanner(analyzeSchedule());
    });
  }

  els.calendarYear.addEventListener("change", () => {
    state.calendarYear = Number(els.calendarYear.value);
    state.calendarSelectedDate = firstServiceDateForYear(state.calendarYear) || `${state.calendarYear}-01-01`;
    persist();
    renderYearCalendar();
  });

  els.calendarClientFilter.addEventListener("change", () => {
    state.calendarClient = els.calendarClientFilter.value;
    persist();
    renderYearCalendar();
  });

  els.calendarStatusFilter.addEventListener("change", () => {
    state.calendarStatus = els.calendarStatusFilter.value;
    persist();
    renderYearCalendar();
  });

  els.calendarRangeStart.addEventListener("change", () => {
    state.calendarRangeStart = els.calendarRangeStart.value;
    persist();
  });

  els.calendarRangeEnd.addEventListener("change", () => {
    state.calendarRangeEnd = els.calendarRangeEnd.value;
    persist();
  });

  els.calendarOptimizeRange.addEventListener("click", optimizeCalendarRange);

  els.draftMode.addEventListener("change", () => {
    state.draftMode = els.draftMode.checked;
    if (state.draftMode) {
      ensureDraftAssignments();
      showToast("Simulació activada. Les assignacions proposades no canviaran la planificació confirmada fins que les apliquis.");
    } else {
      state.draftAssignments = {};
      showToast("Simulació desactivada. Es mantenen les assignacions confirmades.");
    }
    persist();
    render();
  });

  els.developerMode.addEventListener("change", () => {
    state.developerMode = els.developerMode.checked;
    persist();
    renderAssignmentControls();
  });

  els.confirmDraft.addEventListener("click", confirmDraftAssignments);
  els.discardDraft.addEventListener("click", discardDraftAssignments);

  document.querySelector("#autoAssign").addEventListener("click", () => {
    previewAutoAssignment();
  });

  document.querySelector("#clearAssignments").addEventListener("click", () => {
    if (state.draftMode) {
      ensureDraftAssignments();
      state.services.forEach((service) => {
        if (!service.locked) state.draftAssignments[service.id] = "";
      });
    } else {
      state.services = state.services.map((service) => (service.locked ? service : { ...service, workerId: "" }));
    }
    persist();
    render();
    showToast(state.draftMode ? "Propostes de simulació netejades." : "Assignacions netejades.");
  });

  document.querySelector("#resetData").addEventListener("click", () => {
    state = structuredClone(seedState);
    state.weekStart = formatDateInput(getMonday(new Date()));
    state.calendarYear = new Date().getFullYear();
    state.calendarSelectedDate = formatDateInput(new Date());
    state.draftMode = false;
    state.developerMode = false;
    state.draftAssignments = {};
    state.clientStatusFilter = "active";
    state.workerStatusFilter = "active";
    state.selectedClient = "";
    state.selectedWorkerId = "";
    state.clientStatuses = {};
    els.weekStart.value = state.weekStart;
    els.draftMode.checked = false;
    els.developerMode.checked = false;
    if (els.plannerSearch) els.plannerSearch.value = "";
    persist();
    render();
    showToast("Dades reiniciades.");
  });

  els.serviceForm.addEventListener("submit", addService);
  els.serviceForm.addEventListener("input", updateWeeklyPreview);
  els.serviceForm.elements.client.addEventListener("input", () => {
    if (!els.clientProfileForm.elements.client.value || !els.clientProfileForm.dataset.editingClient) {
      els.clientProfileForm.elements.client.value = els.serviceForm.elements.client.value;
    }
  });
  els.serviceForm.addEventListener("change", updateWeeklyPreview);
  els.serviceCancelEdit.addEventListener("click", closeClientEditor);
  els.newClient.addEventListener("click", () => openClientEditor());
  document.querySelectorAll("[data-client-status-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.clientStatusFilter = button.dataset.clientStatusFilter;
      state.selectedClient = "";
      closeClientEditor(false);
      persist();
      render();
    });
  });
  els.clientProfileForm.addEventListener("submit", saveClientProfile);
  els.clientProfileCancelEdit.addEventListener("click", closeClientEditor);
  els.newWorker.addEventListener("click", () => openWorkerEditor());
  els.workerForm.addEventListener("submit", addWorker);
  els.workerCancelEdit.addEventListener("click", resetWorkerForm);
  document.querySelectorAll("[data-worker-status-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.workerStatusFilter = button.dataset.workerStatusFilter;
      state.selectedWorkerId = "";
      resetWorkerForm(false);
      persist();
      render();
    });
  });
  els.clientVacationForm.addEventListener("submit", addClientVacation);
  els.workerVacationForm.addEventListener("submit", addWorkerVacation);
  els.workerVacationForm.elements.indefinite.addEventListener("change", updateWorkerIndefiniteControl);
  els.calendarModalClose.addEventListener("click", closeCalendarDayModal);
  els.autoAssignModalClose.addEventListener("click", discardAutoAssignmentPreview);
  els.autoAssignDiscard.addEventListener("click", discardAutoAssignmentPreview);
  els.autoAssignConfirm.addEventListener("click", confirmAutoAssignmentPreview);
  els.autoAssignModal.addEventListener("click", (event) => {
    if (event.target === els.autoAssignModal) discardAutoAssignmentPreview();
  });
  els.calendarDayModal.addEventListener("click", (event) => {
    if (event.target === els.calendarDayModal) closeCalendarDayModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.calendarDayModal.hidden) closeCalendarDayModal();
    if (event.key === "Escape" && !els.autoAssignModal.hidden) discardAutoAssignmentPreview();
  });
}

function switchView(viewId, updateHash = true) {
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewId);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });

  const titles = {
    dashboard: "Resum operatiu",
    planner: "Planificador setmanal",
    calendar: "Calendari anual",
    clients: "Clients i serveis",
    workers: "Treballadors i disponibilitat",
    vacations: "Calendari de vacances",
    options: "Opcions",
  };
  els.viewTitle.textContent = titles[viewId];
  renderSimulationContext();
  if (updateHash) {
    history.replaceState(null, "", `#${viewId}`);
    window.scrollTo(0, 0);
  }
}

function render() {
  const analysis = analyzeSchedule();
  renderAssignmentControls();
  renderFilterButtons();
  renderSimulationContext();
  renderMetrics(analysis);
  renderDashboard(analysis);
  renderCoordinationCenter();
  renderPlanner(analysis);
  renderYearCalendar();
  renderClientManagement(analysis);
  renderWorkers(analysis);
  renderVacations();
}

function renderAssignmentControls() {
  const current = scoreCurrentAssignment(true);
  const confirmed = scoreCurrentAssignment(false);
  const changes = draftChangeCount();
  const optimization = getAutoAssignmentPreview();
  els.draftMode.checked = Boolean(state.draftMode);
  els.developerMode.checked = Boolean(state.developerMode);
  els.assignmentScore.textContent = `Punts: ${Math.round(current.score)} · ${current.label}`;
  document.querySelector("#draftModeControl")?.classList.toggle("is-active", state.draftMode);
  document.querySelector("#autoAssign").disabled = !optimization.changes.length;
  document.querySelector("#autoAssign").title = optimization.changes.length
    ? `${optimization.changes.length} canvis possibles`
    : "No hi ha cap optimització possible per a aquesta setmana.";
  els.confirmDraft.disabled = !changes;
  els.discardDraft.disabled = !changes;

  if (state.developerMode) {
    const delta = Math.round(current.score - confirmed.score);
    els.draftScorePreview.textContent = state.draftMode
      ? `Vista desenvolupador: simulació ${Math.round(current.score)} punts · confirmat ${Math.round(confirmed.score)} punts · diferencia ${delta >= 0 ? "+" : ""}${delta} · ${changes} canvis pendents.`
      : `Vista desenvolupador: assignacio confirmada ${Math.round(confirmed.score)} punts · ${confirmed.label}.`;
  } else if (state.draftMode) {
    els.draftScorePreview.textContent = changes
      ? `Simulació activa: ${changes} canvis d'assignació pendents. Pots aplicar-los o descartar-los sense tocar clients ni treballadors.`
      : "Simulació activa: prova reassignacions o optimitza la setmana sense canviar encara la planificació confirmada.";
  } else {
    els.draftScorePreview.textContent =
      "La simulació només prova assignacions de serveis. Les edicions de clients i treballadors es guarden o descarten des dels seus formularis.";
  }

  renderDraftComparison();
  renderSimulationContext();
}

function renderDraftComparison() {
  const changes = draftComparisonRows();
  els.draftComparisonPanel.classList.toggle("is-hidden", !state.draftMode || !changes.length);
  els.draftComparisonCount.textContent = `${changes.length} canvis`;
  els.draftComparisonList.innerHTML = changes.length
    ? changes
        .map(
          (row) => `
            <div class="comparison-row">
              <div>
                <strong>${escapeHtml(row.service.client)}</strong>
                <p class="meta">${serviceMeta(row.service)}${row.service.locked ? " · fixat" : ""}</p>
              </div>
              <div class="meta">Actual: ${escapeHtml(row.confirmedName)}</div>
              <div class="meta">Proposta: ${escapeHtml(row.draftName)}</div>
              <div>
                <span class="pill ${row.delta >= 0 ? "success" : "danger"}">${row.delta >= 0 ? "+" : ""}${Math.round(row.delta)} punts</span>
                <p class="meta">${escapeHtml(row.reason)}</p>
              </div>
            </div>
          `,
        )
        .join("")
    : `<p class="empty-state">No hi ha canvis pendents a la simulació.</p>`;
}

function draftComparisonRows() {
  if (!state.draftMode) return [];
  ensureDraftAssignments();
  return orderedServices(requiredServices())
    .filter((service) => (state.draftAssignments[service.id] || "") !== (service.workerId || ""))
    .map((service) => {
      const confirmedWorker = getWorker(service.workerId);
      const draftWorker = getWorker(state.draftAssignments[service.id]);
      const confirmedScore = assignmentSingleScore(service, confirmedWorker, false);
      const draftScore = assignmentSingleScore(service, draftWorker, true);
      return {
        service,
        confirmedName: confirmedWorker?.name || "Sense assignar",
        draftName: draftWorker?.name || "Sense assignar",
        delta: draftScore - confirmedScore,
        reason: draftWorker ? mainScoreReason(draftWorker, service) : "Servei pendent en la simulació",
      };
    });
}

function assignmentSingleScore(service, worker) {
  if (!worker) return -serviceMissPenalty(service);
  const result = evaluateWorkerForService(worker, service, createEmptyWorkerState());
  return result.valid ? result.score : -serviceMissPenalty(service);
}

function renderFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === state.filter);
  });
}

function renderCoordinationCenter() {
  const confirmed = scoreCurrentAssignment(false);
  const proposal = scoreCurrentAssignment(true);
  const rows = coordinationAssignmentRows();
  const changes = rows.filter((row) => row.changed);
  const openNeeds = rows.filter((row) => !row.proposedWorkerId).length;
  const delta = Math.round(proposal.score - confirmed.score);

  els.coordinationMode.textContent = state.draftMode ? "Simulació activa" : "Planificació confirmada";
  els.coordinationMode.className = `pill ${state.draftMode ? "warning" : "success"}`;
  els.coordinationSummary.innerHTML = `
    <div class="coordination-card">
      <strong>${Math.round(confirmed.score)}</strong>
      <span class="meta">Punts assignació actual · ${confirmed.label}</span>
    </div>
    <div class="coordination-card">
      <strong>${Math.round(proposal.score)}</strong>
      <span class="meta">${state.draftMode ? "Punts assignació provisional" : "Sense simulació activa"} · ${proposal.label}</span>
    </div>
    <div class="coordination-card">
      <strong>${delta >= 0 ? "+" : ""}${delta}</strong>
      <span class="meta">${changes.length} canvis proposats · ${openNeeds} necessitats sense proposta</span>
    </div>
  `;
  els.coordinationAssignments.innerHTML = rows.length
    ? rows
        .map((row) => `
          <div class="assignment-preview-row ${row.changed ? "" : "is-unchanged"}">
            <div>
              <strong>${escapeHtml(row.service.client)}</strong>
              <p class="meta">${serviceMeta(row.service)}</p>
            </div>
            <div>
              <span class="meta">Actual</span>
              <strong>${escapeHtml(row.confirmedName)}</strong>
              <p class="meta">${Math.round(row.confirmedScore)} punts</p>
            </div>
            <div>
              <span class="meta">Provisional</span>
              <strong>${escapeHtml(row.proposedName)}</strong>
              <p class="meta">${Math.round(row.proposedScore)} punts</p>
            </div>
            <div>
              <span class="pill ${row.delta >= 0 ? "success" : "danger"}">${row.delta >= 0 ? "+" : ""}${Math.round(row.delta)}</span>
              <p class="meta">${row.changed ? "canvi" : "sense canvi"}</p>
            </div>
          </div>
        `)
        .join("")
    : `<p class="empty-state">No hi ha serveis actius aquesta setmana.</p>`;
}

function coordinationAssignmentRows(assignments = null, useDraftBaseline = false) {
  return assignmentOrder(requiredServices().map((service) => withEffectiveAssignment(service, false))).map((service) => {
    const baselineWorkerId = useDraftBaseline ? effectiveWorkerId(service, true) : service.workerId || "";
    const baselineService = { ...service, workerId: baselineWorkerId };
    const proposedWorkerId = assignments ? assignments[service.id] || "" : effectiveWorkerId(service, true);
    const confirmedWorker = getWorker(baselineWorkerId);
    const proposedWorker = getWorker(proposedWorkerId);
    const confirmedScore = assignmentSingleScore(baselineService, confirmedWorker);
    const proposedScore = assignmentSingleScore({ ...service, workerId: proposedWorkerId }, proposedWorker);
    return {
      service,
      confirmedWorkerId: baselineWorkerId,
      proposedWorkerId,
      confirmedName: confirmedWorker?.name || "Sense assignar",
      proposedName: proposedWorker?.name || "Sense assignar",
      confirmedScore,
      proposedScore,
      delta: proposedScore - confirmedScore,
      changed: baselineWorkerId !== proposedWorkerId,
    };
  });
}

function renderSimulationContext() {
  const planningViews = new Set(["dashboard", "planner", "calendar"]);
  const currentView = document.querySelector(".view.is-active")?.id || "dashboard";
  const visible = planningViews.has(currentView);
  document.querySelector("#draftModeControl")?.classList.toggle("is-hidden", !visible);
  els.confirmDraft.classList.toggle("is-hidden", !visible || !state.draftMode);
  els.discardDraft.classList.toggle("is-hidden", !visible || !state.draftMode);
}

function renderMetrics(analysis) {
  const coverage = analysis.totalHours ? Math.round((analysis.coveredHours / analysis.totalHours) * 100) : 0;
  const dashboard = buildDashboardIncidents(analysis);
  const metrics = [
    ["Accions", String(dashboard.actions.length), "Incidencies que demanen decisio"],
    ["Hores pendents", formatHours(analysis.openHours), `${analysis.openServices} visites sense assignar`],
    ["Conflictes", String(analysis.conflicts.length), "Disponibilitat, baixes o solapaments"],
    ["Cobertura", `${coverage}%`, `${formatHours(analysis.coveredHours)} de ${formatHours(analysis.totalHours)}`],
  ];

  els.metrics.innerHTML = metrics
    .map(
      ([label, value, note]) => `
        <article class="metric">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${note}</small>
        </article>
      `,
    )
    .join("");
}

function renderDashboard(analysis) {
  const dashboard = buildDashboardIncidents(analysis);
  els.serviceCount.textContent = `${dashboard.actions.length} accions`;
  els.conflictCount.textContent = `${dashboard.followUps.length} punts`;
  renderDashboardDayPlan();

  els.upcomingServices.innerHTML = dashboard.actions.length
    ? dashboard.actions.map(renderDashboardIncident).join("")
    : `
      <article class="empty-state operational-empty">
        <strong>Cap accio urgent.</strong>
        <p>La setmana activa no te baixes, serveis pendents ni conflictes que demanin decisio immediata.</p>
      </article>
    `;

  els.conflicts.innerHTML = dashboard.followUps.length
    ? dashboard.followUps.map(renderDashboardIncident).join("")
    : `<p class="empty-state">Sense seguiments rellevants ara mateix.</p>`;

  bindBestButtons();
  bindDashboardNavigation();
}

function renderDashboardDayPlan() {
  const date = state.dashboardDate || formatDateInput(new Date());
  if (els.dashboardDate.value !== date) els.dashboardDate.value = date;
  const occurrences = getOccurrencesForDate(date);
  const active = occurrences.filter((service) => !service.paused);
  const covered = active.filter((service) => service.workerId && !service.workerAbsent);
  const open = active.filter((service) => !service.workerId);
  const issues = active.filter((service) => service.workerAbsent);
  const totalHours = active.reduce((sum, service) => sum + duration(service), 0);

  els.dashboardDaySummary.textContent = `${formatDisplayDate(date)} · ${formatHours(totalHours)} actives · ${covered.length} cobertes · ${open.length} pendents · ${issues.length} conflictes`;
  els.dashboardDayCount.textContent = `${occurrences.length} visites`;
  els.dashboardDayPlan.innerHTML = occurrences.length
    ? occurrences
        .sort((a, b) => a.start.localeCompare(b.start) || a.client.localeCompare(b.client))
        .map(renderDashboardDayService)
        .join("")
    : `<p class="empty-state">Aquest dia no hi ha serveis recurrents. Pots canviar la data o anar al proxim servei programat.</p>`;

  bindDashboardDayActions(date);
}

function nextServiceDateFrom(startDate) {
  const cursor = new Date(startDate);
  for (let i = 0; i < 370; i += 1) {
    const date = formatDateInput(cursor);
    if (getOccurrencesForDate(date).length) return date;
    cursor.setDate(cursor.getDate() + 1);
  }
  return "";
}

function renderDashboardDayService(service) {
  const worker = getWorker(service.workerId);
  const profile = clientProfileFor(service.client);
  const done = state.serviceLogs.some((log) => log.serviceId === service.id && log.date === service.date);
  const status = done
    ? "Fet"
    : service.paused
      ? "Pausat"
      : service.workerAbsent
        ? "Conflicte"
        : service.workerId
          ? "Cobert"
          : "Pendent";
  const pillClass = done || (service.workerId && !service.workerAbsent && !service.paused) ? "success" : service.workerAbsent ? "danger" : "";
  const noteLines = [
    service.requirements ? `Requisits: ${service.requirements}` : "",
    profile.notes ? `Notes client: ${profile.notes}` : "",
    profile.preferredWorkerId ? `Preferit: ${getWorker(profile.preferredWorkerId)?.name || "treballador eliminat"}` : "",
  ].filter(Boolean);

  return `
    <article class="daily-service-card ${service.paused ? "is-paused" : ""} ${service.workerAbsent ? "has-issue" : ""}">
      <div class="daily-time">
        <strong>${service.start}</strong>
        <span>${service.end}</span>
        <small>${formatHours(duration(service))}</small>
      </div>
      <div class="daily-main">
        <h3>${escapeHtml(service.client)}</h3>
        <p class="meta">${escapeHtml(service.zone)} · ${escapeHtml(service.priority)} · ${recurrenceTypeNames[service.recurrenceType] || "Setmanal"}</p>
        <p class="meta">${worker ? `Treballador: ${worker.name}` : "Sense treballador assignat"}${service.workerAbsent ? " · absencia aquest dia" : ""}</p>
        ${noteLines.length ? `<div class="daily-notes">${noteLines.map((note) => `<p>${escapeHtml(note)}</p>`).join("")}</div>` : ""}
      </div>
      <div class="daily-actions">
        <span class="pill ${pillClass}">${status}</span>
        ${
          service.paused
            ? ""
            : `<select data-dashboard-assign-service="${service.id}" data-dashboard-date="${service.date}" aria-label="Assignar treballador a ${escapeHtml(service.client)}">
                <option value="">Sense assignar</option>
                ${renderWorkerAssignmentOptions(service)}
              </select>`
        }
        ${service.workerId && !service.paused ? `<button class="tiny-button" data-dashboard-complete-service="${service.id}" data-dashboard-complete-date="${service.date}" type="button">${done ? "Ja fet" : "Marcar fet"}</button>` : ""}
      </div>
      ${renderScoreBreakdown(service, 2)}
    </article>
  `;
}

function bindDashboardDayActions(date) {
  document.querySelectorAll("[data-dashboard-assign-service]").forEach((select) => {
    select.addEventListener("change", () => {
      const service = getService(select.dataset.dashboardAssignService);
      const occurrence = { ...service, date: select.dataset.dashboardDate };
      const worker = getWorker(select.value);
      if (worker && !workerEligibilityForService(occurrence).some((candidate) => candidate.worker.id === worker.id && candidate.result.valid)) {
        showToast("Aquest treballador no compleix els requisits del servei.");
        renderDashboardDayPlan();
        return;
      }
      setServiceAssignment(service, select.value);
      persist();
      render();
        showToast(state.draftMode ? "Assignació afegida a la simulació." : "Assignacio del dia actualitzada.");
    });
  });

  document.querySelectorAll("[data-dashboard-complete-service]").forEach((button) => {
    button.addEventListener("click", () => completeService(button.dataset.dashboardCompleteService, button.dataset.dashboardCompleteDate, "dashboard"));
  });
}

function buildDashboardIncidents(analysis) {
  const required = orderedServices(requiredServices().map((service) => withEffectiveAssignment(service)));
  const actions = [];
  const followUps = [];
  const openServices = required.filter((service) => !service.workerId);
  const actionableConflicts = analysis.conflicts.filter((conflict) => conflict.message !== "Servei sense treballador assignat.");

  actionableConflicts.forEach((conflict) => {
    const worker = getWorker(conflict.service.workerId);
    const leaveRelated = /absencia|actiu\/va|baixa/i.test(conflict.message);
    actions.push({
      severity: leaveRelated ? "critical" : "warning",
      label: leaveRelated ? "Baixa o absencia" : "Conflicte",
      title: leaveRelated && worker ? `${worker.name} afecta un servei` : conflict.service.client,
      body: conflict.message,
      meta: serviceMeta(conflict.service),
      actionLabel: "Revisar planificador",
      actionView: "planner",
      serviceId: conflict.service.id,
    });
  });

  groupServicesByClient(openServices).forEach((services, client) => {
    const first = orderedServices(services)[0];
    const recommendation = bestCandidateForService(first.id);
    const candidates = serviceCandidatesForDashboard(first);
    const totalHours = services.reduce((sum, service) => sum + duration(service), 0);
    const newClient = isNewClient(client);
    actions.push({
      severity: newClient ? "critical" : "warning",
      label: newClient ? "Client nou" : "Reassignacio pendent",
      title: `${client}: ${services.length} visites pendents`,
      body: newClient
        ? "Client sense historial encara. Convindria assignar una persona estable i començar continuitat."
        : "Hi ha hores actives sense treballador assignat aquesta setmana.",
      meta: `${formatHours(totalHours)} pendents · ${formatDayList(services.map((service) => service.day))}`,
      actionLabel: recommendation ? `Assignar ${recommendation.name}` : "Obrir planificador",
      actionView: recommendation ? "" : "planner",
      serviceId: recommendation ? first.id : "",
      canAssignBest: Boolean(recommendation),
      candidates,
    });
  });

  state.workers
    .filter((worker) => !isWorkerActive(worker))
    .forEach((worker) => {
      const reachableOpen = openServices.filter((service) => worker.zones.includes(service.zone));
      followUps.push({
        severity: worker.status === "Baixa" ? "critical" : "muted",
        label: worker.status,
        title: `${worker.name} no esta disponible`,
        body: reachableOpen.length
          ? `${reachableOpen.length} serveis pendents podrien necessitar substitucio a les seves zones.`
          : "No deixa serveis pendents en la setmana activa.",
        meta: `${worker.zones.join(", ")} · ${formatHours(worker.maxHours)} max/setmana`,
        actionLabel: "Veure equip",
        actionView: "workers",
      });
    });

  currentWeekWorkerAbsences().forEach(({ worker, vacation, affected }) => {
    followUps.push({
      severity: affected.length ? "warning" : "muted",
      label: vacation.reason || "Absencia",
      title: `${worker.name}: absencia aquesta setmana`,
      body: affected.length
        ? `${affected.length} serveis assignats cauen dins l'absencia.`
        : "Absencia registrada sense assignacions afectades.",
      meta: formatDateRange(vacation.start, vacation.end),
      actionLabel: "Veure vacances",
      actionView: "vacations",
    });
  });

  currentWeekClientVacations().forEach(({ vacation, paused }) => {
    followUps.push({
      severity: "muted",
      label: "Client pausat",
      title: vacation.client,
      body: `${paused.length} serveis no s'han de cobrir per vacances o tancament.`,
      meta: formatDateRange(vacation.start, vacation.end),
      actionLabel: "Veure calendari",
      actionView: "calendar",
    });
  });

  const nextStart = state.weekStart;
  const nextEnd = formatDateInput(addDays(new Date(`${state.weekStart}T00:00:00`), 27));
  const futureOpen = occurrencesBetween(nextStart, nextEnd).filter((item) => !item.paused && !item.workerId);
  if (futureOpen.length) {
    followUps.push({
      severity: futureOpen.length > 8 ? "critical" : "warning",
      label: "4 setmanes",
      title: `${futureOpen.length} visites futures sense cobrir`,
      body: "Hi ha demanda propera sense treballador assignat. Conve optimitzar el rang.",
      meta: `${formatHours(futureOpen.reduce((sum, item) => sum + duration(item), 0))} pendents fins ${formatDisplayDate(nextEnd)}`,
      actionLabel: "Veure calendari",
      actionView: "calendar",
    });
  }

  required.forEach((service) => {
    const candidates = workerEligibilityForService(service).filter((candidate) => candidate.result.valid);
    const profile = clientProfileFor(service.client);
    if (!service.paused && candidates.length <= 1) {
      followUps.push({
        severity: candidates.length ? "warning" : "critical",
        label: "Risc cobertura",
        title: `${service.client}: ${candidates.length ? "nomes 1 candidat" : "sense candidat"}`,
        body: candidates.length
          ? `${candidates[0].worker.name} es l'unica persona que pot cobrir aquest servei amb les regles actuals.`
          : "Cap treballador compleix zona, horari, habilitats i regles del client.",
        meta: serviceMeta(service),
        actionLabel: "Revisar clients",
        actionView: "clients",
      });
    }
    if (profile.changePolicy !== "free" && service.workerId && bestCandidateForService(service.id)?.id !== service.workerId) {
      followUps.push({
        severity: profile.changePolicy === "strict" ? "critical" : "warning",
        label: "Canvi sensible",
        title: `${service.client}: revisar abans de canviar`,
        body: "La fitxa del client marca que els canvis de persona s'han de controlar.",
        meta: serviceMeta(service),
        actionLabel: "Veure fitxa",
        actionView: "clients",
      });
    }
  });

  state.workers.forEach((worker) => {
    const assigned = analysis.hoursByWorker.get(worker.id) || 0;
    if (isWorkerActive(worker) && worker.maxHours && assigned / worker.maxHours >= 0.8) {
      followUps.push({
        severity: assigned > worker.maxHours ? "critical" : "warning",
        label: "Carrega alta",
        title: `${worker.name} esta al ${Math.round((assigned / worker.maxHours) * 100)}%`,
        body: "La carrega setmanal es alta. Pot convenir repartir abans que apareguin baixes o solapaments.",
        meta: `${formatHours(assigned)} de ${formatHours(worker.maxHours)}`,
        actionLabel: "Veure equip",
        actionView: "workers",
      });
    }
  });

  return {
    actions: actions.sort(sortIncidents).slice(0, 8),
    followUps: followUps.sort(sortIncidents).slice(0, 8),
  };
}

function renderDashboardIncident(incident) {
  const pillClass = incident.severity === "critical" ? "danger" : incident.severity === "muted" ? "" : "warning";
  const candidateSelect =
    incident.serviceId && incident.candidates?.length > 1
      ? `<select class="candidate-select" data-best-service-select="${incident.serviceId}" aria-label="Triar treballador per ${escapeHtml(incident.title)}">
          <option value="">Triar candidat</option>
          ${incident.candidates
            .map(
              ({ worker, result }) =>
                `<option value="${worker.id}">${escapeHtml(`${worker.name} · ${Math.round(result.score)} punts`)}</option>`,
            )
            .join("")}
        </select>`
      : "";
  return `
    <article class="incident-card ${incident.severity}">
      <div>
        <div class="incident-title">
          <span class="pill ${pillClass}">${escapeHtml(incident.label)}</span>
          <h3>${escapeHtml(incident.title)}</h3>
        </div>
        <p>${escapeHtml(incident.body)}</p>
        <p class="meta">${escapeHtml(incident.meta || "")}</p>
      </div>
      <div class="card-actions stacked-actions">
        ${
          candidateSelect
            ? candidateSelect
            : incident.canAssignBest && incident.serviceId
            ? `<button class="tiny-button" data-best-service="${incident.serviceId}" type="button">${escapeHtml(incident.actionLabel)}</button>`
            : incident.actionView
              ? `<button class="tiny-button neutral" data-go-view="${incident.actionView}" type="button">${escapeHtml(incident.actionLabel)}</button>`
              : ""
        }
      </div>
    </article>
  `;
}

function renderPlanner(analysis) {
  renderPlannerWeekNavigation();
  const query = normalizeText(state.plannerSearch || "");
  const filteredServices = orderedServices(state.services.map((service) => withEffectiveAssignment(service))).filter((service) => {
    if (!isClientActive(service.client)) return false;
    const issues = analysis.byService.get(service.id) || [];
    const paused = isClientOnVacation(service);
    const searchable = normalizeText(`${service.client} ${service.zone} ${service.day} ${service.priority}`);
    if (query && !searchable.includes(query)) return false;
    if (state.filter === "open") return !paused && !service.workerId;
    if (state.filter === "issues") return !paused && issues.length > 0;
    return true;
  });

  els.weekGrid.innerHTML = dayNames
    .map((dayName, index) => {
      const dayServices = filteredServices.filter((service) => service.day === dayName);
      return `
        <section class="day-column">
          <header class="day-header">
            <strong>${dayName}</strong>
            <small>${dateForDay(index)} · ${formatHours(dayServices.filter((service) => !isClientOnVacation(service)).reduce((sum, service) => sum + duration(service), 0))}</small>
          </header>
          <div class="shift-list">
            ${
              dayServices.length
                ? dayServices.map((service) => renderShiftCard(service, analysis)).join("")
                : `<p class="empty-state compact">Cap servei</p>`
            }
          </div>
        </section>
      `;
    })
    .join("");

  document.querySelectorAll("[data-assign-service]").forEach((select) => {
    select.addEventListener("change", () => {
      const service = getService(select.dataset.assignService);
      const worker = getWorker(select.value);
      if (worker && !workerEligibilityForService(service).some((candidate) => candidate.worker.id === worker.id && candidate.result.valid)) {
        showToast("Aquest treballador no compleix els requisits del servei.");
        render();
        return;
      }
      setServiceAssignment(service, select.value);
      persist();
      render();
    });
  });

  document.querySelectorAll("[data-clear-service]").forEach((button) => {
    button.addEventListener("click", () => {
      const service = getService(button.dataset.clearService);
      if (service?.locked) return showToast("Aquest servei esta fixat. Allibera'l abans de buidar-lo.");
      setServiceAssignment(service, "");
      persist();
      render();
    });
  });

  document.querySelectorAll("[data-lock-service]").forEach((button) => {
    button.addEventListener("click", () => toggleServiceLock(button.dataset.lockService));
  });

  bindBestButtons();
}

function renderPlannerWeekNavigation() {
  const start = new Date(`${state.weekStart}T00:00:00`);
  const end = addDays(start, 4);
  const currentMonday = formatDateInput(getMonday(new Date()));
  els.plannerWeekTitle.textContent = state.weekStart === currentMonday ? "Aquesta setmana" : "Setmana planificada";
  els.plannerWeekRange.textContent = `${formatDisplayDate(state.weekStart)} - ${formatDisplayDate(formatDateInput(end))}`;
  els.plannerCurrentWeek.disabled = state.weekStart === currentMonday;
}

function shiftPlannerWeek(days) {
  setPlannerWeek(formatDateInput(addDays(new Date(`${state.weekStart}T00:00:00`), days)));
}

function setPlannerWeek(weekStart) {
  state.weekStart = weekStart;
  els.weekStart.value = weekStart;
  state.dashboardDate = weekStart;
  els.dashboardDate.value = weekStart;
  persist();
  render();
}

function renderShiftCard(service, analysis) {
  const issues = analysis.byService.get(service.id) || [];
  const paused = isClientOnVacation(service);
  const recommendation = bestCandidateForService(service.id);
  const selectedWorker = getWorker(service.workerId);
  const selectedHistory = selectedWorker ? workerClientHistory(selectedWorker, service.client) : null;
  const recommendedHistory = recommendation ? workerClientHistory(recommendation, service.client) : null;
  const workerOptions = renderWorkerAssignmentOptions(service);
  const classes = ["shift-card"];
  if (service.workerId) classes.push("is-covered");
  if (issues.length) classes.push("has-issue");
  if (paused) classes.push("is-paused");
  if (service.locked) classes.push("is-locked");

  return `
    <article class="${classes.join(" ")}">
      <div>
        <h3>${escapeHtml(service.client)}</h3>
        <p class="meta">${service.start}-${service.end} · ${service.zone} · ${service.priority} · ${formatHours(duration(service))}</p>
      </div>
      ${
        paused
          ? `<p class="form-summary compact-summary">Pausat: vacances del client</p>`
          : `<select data-assign-service="${service.id}" aria-label="Assignar treballador a ${escapeHtml(service.client)}">
              <option value="">Sense assignar</option>
              ${workerOptions}
            </select>`
      }
      <div class="mini-actions">
        ${
          paused
            ? `<span class="recommendation">No cal cobrir aquest servei</span>`
            : recommendation && service.workerId !== recommendation.id
            ? `<button class="tiny-button" data-best-service="${service.id}" type="button">Assignar ${escapeHtml(recommendation.name)}${recommendedHistory ? " · habitual" : ""}</button>`
            : recommendation
              ? `<span class="recommendation">Recomanat: ${escapeHtml(recommendation.name)}${selectedHistory ? ` · habitual (${selectedHistory.visits})` : ""}</span>`
              : `<span class="recommendation">Sense candidat directe</span>`
        }
        <button class="tiny-button neutral" data-clear-service="${service.id}" type="button">Buidar</button>
        <button class="tiny-button neutral" data-lock-service="${service.id}" type="button">${service.locked ? "Alliberar" : "Fixar"}</button>
      </div>
      ${issues.length ? `<p class="meta issue-text">${issues.map((issue) => escapeHtml(issue.message)).join(" · ")}</p>` : ""}
      ${renderScoreBreakdown(service)}
    </article>
  `;
}

function renderWorkerAssignmentOptions(service) {
  const candidates = workerEligibilityForService(service);
  const available = candidates.filter((candidate) => candidate.result.valid);
  const unavailable = candidates.filter((candidate) => !candidate.result.valid);
  const availableOptions = available
    .map(({ worker, result }) => {
      const history = workerClientHistory(worker, service.client);
      const note = history ? ` · habitual (${history.visits})` : ` · ${Math.round(result.score)} punts`;
      return `<option value="${worker.id}" ${service.workerId === worker.id ? "selected" : ""}>${escapeHtml(worker.name + note)}</option>`;
    })
    .join("");
  const unavailableOptions = unavailable
    .map(({ worker, result }) => {
      const selected = service.workerId === worker.id ? "selected" : "";
      const reason = workerUnavailableReason(result.reason, worker, service);
      return `<option class="unavailable-option" value="${worker.id}" disabled ${selected}>${escapeHtml(`${worker.name} - ${reason}`)}</option>`;
    })
    .join("");

  return `
    ${availableOptions ? `<optgroup label="Disponibles">${availableOptions}</optgroup>` : ""}
    ${unavailableOptions ? `<optgroup label="No disponibles">${unavailableOptions}</optgroup>` : ""}
  `;
}

function renderYearCalendar() {
  fillCalendarControls();
  const year = Number(state.calendarYear) || new Date().getFullYear();
  const allOccurrences = getYearOccurrences(year);
  const visibleOccurrences = allOccurrences.filter(matchesCalendarFilters);
  const byDate = groupOccurrencesByDate(visibleOccurrences);
  state.calendarSelectedDate = normalizeCalendarSelectedDate(year, visibleOccurrences);
  els.calendarServiceCount.textContent = `${visibleOccurrences.length} visites`;
  renderCalendarSummary(visibleOccurrences);

  els.yearCalendar.innerHTML = monthNames
    .map((monthName, monthIndex) => renderMonthCalendar(year, monthIndex, monthName, byDate))
    .join("");

  renderCalendarDayDetail(byDate.get(state.calendarSelectedDate) || []);

  document.querySelectorAll("[data-calendar-date]").forEach((button) => {
    button.addEventListener("click", () => {
      state.calendarSelectedDate = button.dataset.calendarDate;
      persist();
      renderYearCalendar();
      openCalendarDayModal(button.dataset.calendarDate);
    });
  });
}

function renderCalendarSummary(occurrences) {
  const active = occurrences.filter((item) => !item.paused);
  const covered = active.filter((item) => item.workerId && !item.workerAbsent);
  const open = active.filter((item) => !item.workerId);
  const issues = active.filter((item) => item.workerAbsent);
  const rangeScore = scoreOccurrences(active);
  const metrics = [
    ["Hores anuals", formatHours(active.reduce((sum, item) => sum + duration(item), 0)), "Necessitat activa segons recurrencia"],
    ["Cobertes", formatHours(covered.reduce((sum, item) => sum + duration(item), 0)), `${covered.length} visites amb treballador`],
    ["Pendents", formatHours(open.reduce((sum, item) => sum + duration(item), 0)), `${open.length} visites sense assignar`],
    ["Punts anuals", String(Math.round(rangeScore.score)), `${rangeScore.assigned}/${active.length} visites puntuades`],
  ];

  els.calendarSummary.innerHTML = metrics
    .map(
      ([label, value, note]) => `
        <article class="metric compact">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${note}</small>
        </article>
      `,
    )
    .join("");
}

function scoreOccurrences(occurrences) {
  let score = 0;
  let assigned = 0;
  [...occurrences].sort((a, b) => (a.date || "").localeCompare(b.date || "") || a.start.localeCompare(b.start)).forEach((occurrence) => {
    const worker = getWorker(occurrence.workerId);
    if (!worker) {
      score -= serviceMissPenalty(occurrence);
      return;
    }
    const workerState = createEmptyWorkerState();
    const result = evaluateWorkerForService(worker, occurrence, workerState);
    score += result.valid ? result.score : -serviceMissPenalty(occurrence);
    if (result.valid) assigned += 1;
  });
  return { score, assigned };
}

function renderMonthCalendar(year, monthIndex, monthName, byDate) {
  const days = workdaysForMonth(year, monthIndex);
  const monthOccurrences = days.flatMap((date) => byDate.get(formatDateInput(date)) || []);
  const activeHours = monthOccurrences
    .filter((item) => !item.paused)
    .reduce((sum, item) => sum + duration(item), 0);
  const blanks = days.length ? workdayColumn(days[0]) : 0;

  return `
    <section class="month-card">
      <header class="month-header">
        <div>
          <h3>${monthName}</h3>
          <p class="meta">${formatHours(activeHours)} · ${monthOccurrences.length} visites</p>
        </div>
      </header>
      <div class="month-weekdays">
        ${["Dl", "Dt", "Dc", "Dj", "Dv"].map((day) => `<span>${day}</span>`).join("")}
      </div>
      <div class="month-days" style="--leading-days: ${blanks}">
        ${Array.from({ length: blanks }, () => `<span class="calendar-blank"></span>`).join("")}
        ${days.map((date) => renderCalendarDay(date, byDate.get(formatDateInput(date)) || [])).join("")}
      </div>
    </section>
  `;
}

function renderCalendarDay(date, occurrences) {
  const isoDate = formatDateInput(date);
  const active = occurrences.filter((item) => !item.paused);
  const open = active.filter((item) => !item.workerId);
  const issues = active.filter((item) => item.workerAbsent);
  const covered = active.filter((item) => item.workerId && !item.workerAbsent);
  const paused = occurrences.filter((item) => item.paused);
  const totalHours = active.reduce((sum, item) => sum + duration(item), 0);
  const classes = ["calendar-day"];
  if (isoDate === state.calendarSelectedDate) classes.push("is-selected");
  if (occurrences.length) classes.push("has-services");
  if (open.length) classes.push("has-open");
  if (issues.length) classes.push("has-issue");
  if (paused.length && !active.length) classes.push("is-paused");

  return `
    <button class="${classes.join(" ")}" data-calendar-date="${isoDate}" type="button">
      <span class="day-number">${date.getDate()}</span>
      ${
        occurrences.length
          ? `
            <span class="day-hours">${formatHours(totalHours)}</span>
            <span class="day-service-preview">
              ${occurrences
                .slice(0, 2)
                .map((item) => `<i>${escapeHtml(item.client)}</i>`)
                .join("")}
            </span>
            <span class="status-dots" aria-hidden="true">
              ${covered.length ? `<i class="dot covered"></i>` : ""}
              ${open.length ? `<i class="dot open"></i>` : ""}
              ${issues.length ? `<i class="dot issue"></i>` : ""}
              ${paused.length ? `<i class="dot paused"></i>` : ""}
            </span>
          `
          : `<span class="day-hours muted">-</span>`
      }
    </button>
  `;
}

function renderCalendarDayDetail(occurrences) {
  const date = state.calendarSelectedDate;
  const active = occurrences.filter((item) => !item.paused);
  els.calendarDetailTitle.textContent = `Detall del ${formatDisplayDate(date)}`;
  els.calendarDetailCount.textContent = `${formatHours(active.reduce((sum, item) => sum + duration(item), 0))}`;
  els.calendarDayDetail.innerHTML = renderCalendarServiceCards(occurrences);
  return;

  els.calendarDayDetail.innerHTML = occurrences.length
    ? occurrences
        .sort((a, b) => a.start.localeCompare(b.start) || a.client.localeCompare(b.client))
        .map((service) => {
          const worker = getWorker(service.workerId);
          const recommendation = !service.paused && !worker ? bestCandidateForOccurrence(service) : null;
          const status = service.paused
            ? "Pausat per vacances del client"
            : service.workerAbsent
              ? `${worker?.name || "Treballador"} esta d'absencia`
              : worker
                ? `Assignat a ${worker.name}`
                : "Pendent d'assignar";
          const classes = ["service-card", "calendar-service-card"];
          if (service.paused) classes.push("is-paused");
          if (service.workerAbsent) classes.push("has-issue");

          return `
            <article class="${classes.join(" ")}">
              <div>
                <h3>${escapeHtml(service.client)}</h3>
                <p class="meta">${service.start}-${service.end} · ${service.zone} · ${formatHours(duration(service))} · ${service.priority}</p>
                <p class="meta">${escapeHtml(status)}</p>
                ${recommendation ? `<p class="recommendation">Millor candidat: ${escapeHtml(recommendation.name)}</p>` : ""}
              </div>
              <span class="pill ${service.workerAbsent ? "danger" : service.workerId && !service.paused ? "success" : ""}">
                ${service.paused ? "Pausat" : service.workerAbsent ? "Conflicte" : service.workerId ? "Cobert" : "Pendent"}
              </span>
            </article>
          `;
        })
        .join("")
    : `<p class="empty-state">Aquest dia no hi ha cap servei recurrent.</p>`;
}

function openCalendarDayModal(date) {
  const occurrences = calendarOccurrencesForDate(date);
  const active = occurrences.filter((item) => !item.paused);
  const covered = active.filter((item) => item.workerId && !item.workerAbsent);
  const open = active.filter((item) => !item.workerId);
  const issues = active.filter((item) => item.workerAbsent);
  const paused = occurrences.filter((item) => item.paused);

  els.calendarModalTitle.textContent = `Serveis del ${formatDisplayDate(date)}`;
  els.calendarModalSubtitle.textContent = `${occurrences.length} visites · ${formatHours(active.reduce((sum, item) => sum + duration(item), 0))} actives`;
  els.calendarModalSummary.innerHTML = [
    ["Actives", active.length],
    ["Cobertes", covered.length],
    ["Pendents", open.length],
    ["Conflictes", issues.length],
    ["Pausades", paused.length],
  ]
    .map(([label, value]) => `<span class="modal-kpi"><strong>${value}</strong>${label}</span>`)
    .join("");
  els.calendarModalServices.innerHTML = renderCalendarServiceCards(occurrences, true);
  bindCalendarModalAssignments(date);
  els.calendarDayModal.hidden = false;
  els.calendarDayModal.setAttribute("aria-hidden", "false");
  els.calendarModalClose.focus();
}

function closeCalendarDayModal() {
  els.calendarDayModal.hidden = true;
  els.calendarDayModal.setAttribute("aria-hidden", "true");
}

function calendarOccurrencesForDate(date) {
  return getOccurrencesForDate(date).filter(matchesCalendarFilters);
}

function renderCalendarServiceCards(occurrences, compact = false) {
  return occurrences.length
    ? occurrences
        .sort((a, b) => a.start.localeCompare(b.start) || a.client.localeCompare(b.client))
        .map((service) => renderCalendarServiceCard(service, compact))
        .join("")
    : `<p class="empty-state">Aquest dia no hi ha cap servei recurrent.</p>`;
}

function renderCalendarServiceCard(service, compact = false) {
  const worker = getWorker(service.workerId);
  const recommendation = !service.paused && !worker ? bestCandidateForOccurrence(service) : null;
  const status = service.paused
    ? "Pausat per vacances del client"
    : service.workerAbsent
      ? `${worker?.name || "Treballador"} esta d'absencia`
      : worker
        ? `Assignat a ${worker.name}`
        : "Pendent d'assignar";
  const classes = ["service-card", "calendar-service-card"];
  if (compact) classes.push("is-compact");
  if (service.paused) classes.push("is-paused");
  if (service.workerAbsent) classes.push("has-issue");

  return `
    <article class="${classes.join(" ")}">
      <div>
        <h3>${escapeHtml(service.client)}</h3>
        <p class="meta">${service.start}-${service.end} · ${service.zone} · ${formatHours(duration(service))} · ${service.priority}</p>
        <p class="meta">${escapeHtml(status)}</p>
        ${
          compact && !service.paused
            ? `<select class="modal-worker-select" data-calendar-assign-service="${service.id}" aria-label="Assignar treballador a ${escapeHtml(service.client)}">
                <option value="">Sense assignar</option>
                ${renderWorkerAssignmentOptions(service)}
              </select>`
            : ""
        }
        ${recommendation ? `<p class="recommendation">Millor candidat: ${escapeHtml(recommendation.name)}</p>` : ""}
      </div>
      <div class="card-actions stacked-actions">
        <span class="pill ${service.workerAbsent ? "danger" : service.workerId && !service.paused ? "success" : ""}">
          ${service.paused ? "Pausat" : service.workerAbsent ? "Conflicte" : service.workerId ? "Cobert" : "Pendent"}
        </span>
        ${compact && service.workerId && !service.paused ? `<button class="tiny-button" data-complete-service="${service.id}" data-complete-date="${service.date}" type="button">Marcar fet</button>` : ""}
      </div>
    </article>
  `;
}

function bindCalendarModalAssignments(date) {
  document.querySelectorAll("[data-calendar-assign-service]").forEach((select) => {
    select.addEventListener("change", () => {
      const service = getService(select.dataset.calendarAssignService);
      const worker = getWorker(select.value);
      if (worker && !workerEligibilityForService({ ...service, date }).some((candidate) => candidate.worker.id === worker.id && candidate.result.valid)) {
        showToast("Aquest treballador no compleix els requisits del servei.");
        openCalendarDayModal(date);
        return;
      }
      setServiceAssignment(service, select.value);
      persist();
      render();
      openCalendarDayModal(date);
      showToast(state.draftMode ? "Assignació afegida a la simulació." : "Assignacio actualitzada.");
    });
  });
  document.querySelectorAll("[data-complete-service]").forEach((button) => {
    button.addEventListener("click", () => completeService(button.dataset.completeService, button.dataset.completeDate));
  });
}

function renderClientManagement(analysis = analyzeSchedule()) {
  fillClientProfileControls();
  const clients = getClientSummaries();
  const visibleClients = clients.filter((client) => matchesClientStatusFilter(client.status));
  const selectedClient = state.selectedClient && clients.some((client) => client.name === state.selectedClient) ? state.selectedClient : "";
  const activeCount = clients.filter((client) => client.status === "Actiu").length;
  const selectedServices = selectedClient ? state.services.filter((service) => service.client === selectedClient) : [];
  const selectedRecurrences = selectedClient ? getRecurrenceSummaries().filter((recurrence) => recurrence.client === selectedClient) : [];

  els.clientServiceCount.textContent = `${activeCount}/${clients.length} actius`;
  document.querySelectorAll("[data-client-status-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.clientStatusFilter === state.clientStatusFilter);
  });

  els.clientOverview.innerHTML = visibleClients.length
    ? visibleClients
        .map((client) => renderClientOverviewRow(client))
        .join("")
    : `<p class="empty-state">No hi ha clients en aquest filtre.</p>`;

  document.querySelectorAll(".client-detail").forEach((panel) => panel.classList.toggle("is-hidden", !selectedClient));
  els.clientDetailPanel.classList.toggle("is-hidden", !selectedClient);

  if (selectedClient) {
    const summary = clients.find((client) => client.name === selectedClient);
    els.clientDetailTitle.textContent = selectedClient;
    els.clientDetailStatus.textContent = summary.status;
    els.clientDetailStatus.className = `pill ${summary.status === "Baixa" ? "danger" : "success"}`;
    els.clientDetailActions.innerHTML = renderClientActionButtons(selectedClient, summary.status);
    els.clientDetailSummary.innerHTML = `
      <div class="summary-item"><strong>${summary.serviceCount}</strong><span class="meta">Serveis recurrents</span></div>
      <div class="summary-item"><strong>${formatHours(summary.weeklyHours)}</strong><span class="meta">Hores setmanals</span></div>
      <div class="summary-item"><strong>${escapeHtml(summary.zones.join(", ") || "Sense zona")}</strong><span class="meta">Zones</span></div>
      <div class="summary-item"><strong>${summary.profile ? "Si" : "No"}</strong><span class="meta">Fitxa operativa</span></div>
    `;
  }

  els.clientProfileCount.textContent = selectedClient ? "1 client" : "Cap client";
  els.clientRecurrenceCount.textContent = selectedClient ? `${selectedRecurrences.length} recurrències` : "Selecciona client";
  els.generatedServiceCount.textContent = selectedClient ? `${selectedServices.length} serveis` : "Selecciona client";
  els.recurrenceTable.innerHTML = renderRecurrenceRows(selectedRecurrences, selectedClient);
  els.clientProfileTable.innerHTML = selectedClient ? renderClientProfileRow(selectedClient) : `<p class="empty-state">Selecciona un client.</p>`;
  els.serviceTable.innerHTML = renderClientServiceRows(selectedServices, selectedClient, analysis);
  renderServiceHistory(selectedClient);

  bindClientOverviewActions();
  bindClientDetailTables();
}

function renderClientOverviewRow(client) {
  return `
    <div class="table-row ${client.status === "Baixa" ? "is-inactive" : ""}">
      <div>
        <strong>${escapeHtml(client.name)}</strong>
        <p class="meta">${client.serviceCount} serveis recurrents · ${formatHours(client.weeklyHours)}/setmana</p>
      </div>
      <div class="meta">${escapeHtml(client.zones.join(", ") || "Sense zona")} · ${client.profile ? "fitxa completa" : "sense fitxa"}</div>
      <div><span class="pill ${client.status === "Baixa" ? "danger" : "success"}">${client.status}</span></div>
      <div class="mini-actions">
        <button class="icon-button" data-view-client="${escapeHtml(client.name)}" type="button">Detall</button>
        ${renderClientActionButtons(client.name, client.status)}
      </div>
    </div>
  `;
}

function renderClientActionButtons(client, status) {
  return `
    <button class="icon-button" data-edit-client="${escapeHtml(client)}" type="button">Editar</button>
    ${
      status === "Actiu"
        ? `<button class="icon-button danger-button" data-deactivate-client="${escapeHtml(client)}" type="button">Donar de baixa</button>`
        : `<button class="icon-button" data-activate-client="${escapeHtml(client)}" type="button">Donar d'alta</button>`
    }
  `;
}

function renderRecurrenceRows(recurrences, selectedClient) {
  if (!selectedClient) return `<p class="empty-state">Selecciona un client.</p>`;
  return recurrences.length
    ? recurrences
        .map(
          (recurrence) => `
            <div class="recurrence-row">
              <div>
                <strong>${escapeHtml(recurrence.client)}</strong>
                <p class="meta">${escapeHtml(recurrence.zone)} · ${recurrence.priority}</p>
              </div>
              <div class="meta">${escapeHtml(formatDayList(recurrence.days))} · ${recurrence.start}-${recurrence.end} · ${formatHours(recurrence.hoursPerVisit)} per visita</div>
              <div><span class="pill">${formatHours(recurrence.weeklyHours)}/setmana</span></div>
              <button class="icon-button danger-button" data-delete-recurrence="${recurrence.id}" type="button" title="Eliminar recurrencia">Eliminar</button>
            </div>
          `,
        )
        .join("")
    : `<p class="empty-state">Aquest client no te serveis recurrents.</p>`;
}

function renderClientProfileRow(client) {
  const profile = state.clientProfiles[client];
  if (!profile) return `<p class="empty-state">Aquest client encara no te fitxa operativa.</p>`;
  const preferred = getWorker(profile.preferredWorkerId)?.name || "Sense preferit";
  const vetoed = (profile.vetoedWorkers || []).map((id) => getWorker(id)?.name).filter(Boolean).join(", ") || "Cap veto";
  const continuity = clientContinuityLabel(profile.continuityPolicy);
  return `
    <div class="table-row">
      <div>
        <strong>${escapeHtml(client)}</strong>
        <p class="meta">${escapeHtml(profile.notes || "Sense notes")}</p>
      </div>
      <div class="meta">Preferit: ${escapeHtml(preferred)} · Vetats: ${escapeHtml(vetoed)} · ${escapeHtml(continuity)}</div>
      <div><span class="pill">Exigencia ${profile.qualityLevel || 3}/5</span></div>
      <button class="icon-button danger-button" data-delete-client-profile="${escapeHtml(client)}" type="button">Eliminar</button>
    </div>
  `;
}

function renderClientServiceRows(services, selectedClient, analysis) {
  if (!selectedClient) return `<p class="empty-state">Selecciona un client.</p>`;
  return services.length
    ? orderedServices(services)
        .map((service) => {
          const worker = getWorker(service.workerId);
          const issues = analysis.byService.get(service.id) || [];
          return `
            <div class="table-row">
              <div>
                <strong>${escapeHtml(service.client)}</strong>
                <p class="meta">${service.zone} · ${service.priority}</p>
              </div>
              <div class="meta">${service.day} · ${service.start}-${service.end} · ${formatHours(duration(service))}</div>
              <div>
                <span class="pill ${issues.length ? "danger" : service.workerId ? "success" : ""}">${worker ? worker.name : "Pendent"}</span>
                ${service.locked ? `<span class="pill warning">Fixat</span>` : ""}
              </div>
              <div class="mini-actions">
                <button class="icon-button" data-lock-service="${service.id}" type="button" title="Fixar assignacio">${service.locked ? "Alliberar" : "Fixar"}</button>
                <button class="icon-button danger-button" data-delete-service="${service.id}" type="button" title="Eliminar servei">Eliminar</button>
              </div>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-state">Aquest client no te serveis generats.</p>`;
}

function bindClientOverviewActions() {
  document.querySelectorAll("[data-view-client]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedClient = button.dataset.viewClient;
      closeClientEditor(false);
      persist();
      render();
    });
  });
  document.querySelectorAll("[data-edit-client]").forEach((button) => {
    button.addEventListener("click", () => openClientEditor(button.dataset.editClient));
  });
  document.querySelectorAll("[data-deactivate-client]").forEach((button) => {
    button.addEventListener("click", () => setClientStatus(button.dataset.deactivateClient, "Baixa"));
  });
  document.querySelectorAll("[data-activate-client]").forEach((button) => {
    button.addEventListener("click", () => setClientStatus(button.dataset.activateClient, "Actiu"));
  });
}

function bindClientDetailTables() {
  document.querySelectorAll("[data-delete-recurrence]").forEach((button) => {
    button.addEventListener("click", () => {
      state.services = state.services.filter((service) => recurrenceKey(service) !== button.dataset.deleteRecurrence);
      removeDraftAssignmentsForMissingServices();
      persist();
      render();
      showToast("Recurrencia eliminada.");
    });
  });

  document.querySelectorAll("#serviceTable [data-delete-service]").forEach((button) => {
    button.addEventListener("click", () => {
      state.services = state.services.filter((service) => service.id !== button.dataset.deleteService);
      removeDraftAssignmentsForMissingServices();
      persist();
      render();
      showToast("Servei eliminat.");
    });
  });

  document.querySelectorAll("#serviceTable [data-lock-service]").forEach((button) => {
    button.addEventListener("click", () => toggleServiceLock(button.dataset.lockService));
  });

  document.querySelectorAll("[data-delete-client-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      delete state.clientProfiles[button.dataset.deleteClientProfile];
      persist();
      render();
      showToast("Fitxa de client eliminada.");
    });
  });

  document.querySelectorAll("[data-delete-service-log]").forEach((button) => {
    button.addEventListener("click", () => {
      state.serviceLogs = state.serviceLogs.filter((log) => log.id !== button.dataset.deleteServiceLog);
      persist();
      render();
      showToast("Registre eliminat.");
    });
  });
}

function openClientEditor(client = "") {
  const recurrences = client ? getRecurrenceSummaries().filter((recurrence) => recurrence.client === client) : [];
  const recurrence = recurrences[0];
  const profile = clientProfileFor(client);
  document.querySelectorAll(".client-editor").forEach((panel) => panel.classList.remove("is-hidden"));
  els.serviceForm.dataset.editingClient = client;
  els.serviceForm.dataset.editingRecurrence = recurrence?.id || "";
  els.clientProfileForm.dataset.editingClient = client;
  els.serviceSubmitButton.textContent = recurrence ? "Desar canvis" : "Desar recurrencia";
  els.clientProfileSubmitButton.textContent = client ? "Desar fitxa" : "Desar fitxa";

  resetServiceFormValues();
  if (client) {
    els.serviceForm.elements.client.value = client;
    els.clientProfileForm.elements.client.value = client;
  }
  if (recurrence) fillServiceFormFromRecurrence(recurrence);

  els.clientProfileForm.elements.status.value = clientStatus(client);
  els.clientProfileForm.elements.preferredWorkerId.value = profile.preferredWorkerId || "";
  [...els.clientProfileForm.elements.vetoedWorkers.options].forEach((option) => {
    option.selected = (profile.vetoedWorkers || []).includes(option.value);
  });
  els.clientProfileForm.elements.preferredShift.value = profile.preferredShift || "Indiferent";
  els.clientProfileForm.elements.qualityLevel.value = profile.qualityLevel || 3;
  els.clientProfileForm.elements.continuityPolicy.value = profile.continuityPolicy || "flexible";
  els.clientProfileForm.elements.changePolicy.value = profile.changePolicy || "free";
  els.clientProfileForm.elements.notes.value = profile.notes || "";
  updateWeeklyPreview();
  els.serviceForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeClientEditor(scroll = true) {
  document.querySelectorAll(".client-editor").forEach((panel) => panel.classList.add("is-hidden"));
  delete els.serviceForm.dataset.editingClient;
  delete els.serviceForm.dataset.editingRecurrence;
  delete els.clientProfileForm.dataset.editingClient;
  resetServiceFormValues();
  resetClientProfileFormValues();
  if (scroll) document.querySelector("#clients .panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetServiceFormValues() {
  els.serviceForm.reset();
  els.serviceForm.elements.start.value = "09:00";
  els.serviceForm.elements.durationHours.value = "2";
  els.serviceForm.elements.activeFrom.value = state.weekStart;
  setCheckedValues(els.serviceForm, "days", []);
  updateWeeklyPreview();
}

function resetClientProfileFormValues() {
  els.clientProfileForm.reset();
  els.clientProfileForm.elements.status.value = "Actiu";
  els.clientProfileForm.elements.preferredShift.value = "Indiferent";
  els.clientProfileForm.elements.qualityLevel.value = "3";
  els.clientProfileForm.elements.continuityPolicy.value = "flexible";
  els.clientProfileForm.elements.changePolicy.value = "free";
}

function fillServiceFormFromRecurrence(recurrence) {
  const fields = els.serviceForm.elements;
  fields.client.value = recurrence.client;
  fields.zone.value = recurrence.zone;
  fields.recurrenceType.value = recurrence.recurrenceType || "weekly";
  fields.activeFrom.value = recurrence.activeFrom || state.weekStart;
  fields.activeTo.value = recurrence.activeTo || "";
  fields.start.value = recurrence.start;
  fields.durationHours.value = recurrence.hoursPerVisit;
  fields.priority.value = recurrence.priority;
  fields.requirements.value = recurrence.requirements || "";
  setCheckedValues(els.serviceForm, "days", recurrence.days);
}

function setClientStatus(client, status) {
  if (!client) return;
  state.clientStatuses[client] = status;
  if (status === "Baixa") {
    state.services = state.services.map((service) => (service.client === client ? { ...service, workerId: "" } : service));
    removeDraftAssignmentsForMissingServices();
  }
  state.selectedClient = client;
  persist();
  render();
  showToast(status === "Baixa" ? `${client} donat de baixa.` : `${client} donat d'alta.`);
}

function renderServices() {
  const recurrences = getRecurrenceSummaries();
  els.clientServiceCount.textContent = `${recurrences.length} clients`;
  els.generatedServiceCount.textContent = `${state.services.length} serveis`;

  els.recurrenceTable.innerHTML = recurrences.length
    ? recurrences
        .map(
          (recurrence) => `
            <div class="recurrence-row">
              <div>
                <strong>${escapeHtml(recurrence.client)}</strong>
                <p class="meta">${escapeHtml(recurrence.zone)} · ${recurrence.priority}</p>
              </div>
              <div class="meta">${escapeHtml(formatDayList(recurrence.days))} · ${recurrence.start}-${recurrence.end} · ${formatHours(recurrence.hoursPerVisit)} per visita</div>
              <div><span class="pill">${formatHours(recurrence.weeklyHours)}/setmana</span></div>
              <button class="icon-button danger-button" data-delete-recurrence="${recurrence.id}" type="button" title="Eliminar recurrencia">Eliminar</button>
            </div>
          `,
        )
        .join("")
    : `<p class="empty-state">Encara no hi ha clients recurrents.</p>`;

  els.serviceTable.innerHTML = state.services.length
    ? orderedServices(state.services)
        .map((service) => {
          const worker = getWorker(service.workerId);
          const issues = analyzeSchedule().byService.get(service.id) || [];
          return `
            <div class="table-row">
              <div>
                <strong>${escapeHtml(service.client)}</strong>
                <p class="meta">${service.zone} · ${service.priority}</p>
              </div>
              <div class="meta">${service.day} · ${service.start}-${service.end} · ${formatHours(duration(service))}</div>
              <div>
                <span class="pill ${issues.length ? "danger" : service.workerId ? "success" : ""}">${worker ? worker.name : "Pendent"}</span>
                ${service.locked ? `<span class="pill warning">Fixat</span>` : ""}
              </div>
              <div class="mini-actions">
                <button class="icon-button" data-lock-service="${service.id}" type="button" title="Fixar assignacio">${service.locked ? "Alliberar" : "Fixar"}</button>
                <button class="icon-button danger-button" data-delete-service="${service.id}" type="button" title="Eliminar servei">Eliminar</button>
              </div>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-state">Encara no hi ha serveis generats.</p>`;

  document.querySelectorAll("[data-delete-recurrence]").forEach((button) => {
    button.addEventListener("click", () => {
      state.services = state.services.filter((service) => recurrenceKey(service) !== button.dataset.deleteRecurrence);
      removeDraftAssignmentsForMissingServices();
      persist();
      render();
      showToast("Recurrencia eliminada.");
    });
  });

  document.querySelectorAll("[data-delete-service]").forEach((button) => {
    button.addEventListener("click", () => {
      state.services = state.services.filter((service) => service.id !== button.dataset.deleteService);
      removeDraftAssignmentsForMissingServices();
      persist();
      render();
      showToast("Servei eliminat.");
    });
  });

  document.querySelectorAll("#serviceTable [data-lock-service]").forEach((button) => {
    button.addEventListener("click", () => toggleServiceLock(button.dataset.lockService));
  });
}

function renderClientProfiles() {
  fillClientProfileControls();
  const rows = Object.entries(state.clientProfiles || {}).sort(([a], [b]) => a.localeCompare(b));
  els.clientProfileCount.textContent = `${rows.length} fitxes`;
  els.clientProfileTable.innerHTML = rows.length
    ? rows
        .map(([client, profile]) => {
          const preferred = getWorker(profile.preferredWorkerId)?.name || "Sense preferit";
          const vetoed = (profile.vetoedWorkers || []).map((id) => getWorker(id)?.name).filter(Boolean).join(", ") || "Cap veto";
          const continuity = clientContinuityLabel(profile.continuityPolicy);
          return `
            <div class="table-row">
              <div>
                <strong>${escapeHtml(client)}</strong>
                <p class="meta">${escapeHtml(profile.notes || "Sense notes")}</p>
              </div>
              <div class="meta">Preferit: ${escapeHtml(preferred)} · Vetats: ${escapeHtml(vetoed)} · ${escapeHtml(continuity)}</div>
              <div><span class="pill">Exigencia ${profile.qualityLevel || 3}/5</span></div>
              <button class="icon-button danger-button" data-delete-client-profile="${escapeHtml(client)}" type="button">Eliminar</button>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-state">Encara no hi ha fitxes de client.</p>`;

  document.querySelectorAll("[data-delete-client-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      delete state.clientProfiles[button.dataset.deleteClientProfile];
      persist();
      render();
      showToast("Fitxa de client eliminada.");
    });
  });
}

function renderServiceHistory(client = "") {
  const visibleLogs = client ? (state.serviceLogs || []).filter((log) => log.client === client) : state.serviceLogs || [];
  const logs = [...visibleLogs].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 20);
  els.serviceHistoryCount.textContent = `${visibleLogs.length} registres`;
  els.serviceHistoryTable.innerHTML = logs.length
    ? logs
        .map((log) => `
          <div class="table-row">
            <div>
              <strong>${escapeHtml(log.client)}</strong>
              <p class="meta">${formatDisplayDate(log.date)} · ${escapeHtml(log.workerName || "Sense treballador")}</p>
            </div>
            <div class="meta">${escapeHtml(log.notes || "Servei completat")}</div>
            <div><span class="pill success">Fet</span></div>
            <button class="icon-button danger-button" data-delete-service-log="${log.id}" type="button">Eliminar</button>
          </div>
        `)
        .join("")
    : `<p class="empty-state">Encara no hi ha serveis registrats com a fets.</p>`;

  document.querySelectorAll("[data-delete-service-log]").forEach((button) => {
    button.addEventListener("click", () => {
      state.serviceLogs = state.serviceLogs.filter((log) => log.id !== button.dataset.deleteServiceLog);
      persist();
      render();
      showToast("Registre eliminat.");
    });
  });
}

function renderWorkers(analysis) {
  const activeWorkers = state.workers.filter((worker) => isWorkerActive(worker)).length;
  const visibleWorkers = state.workers.filter((worker) => matchesWorkerStatusFilter(worker));
  const selectedWorker = getWorker(state.selectedWorkerId);
  els.workerCount.textContent = `${activeWorkers}/${state.workers.length} actius`;
  document.querySelectorAll("[data-worker-status-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.workerStatusFilter === state.workerStatusFilter);
  });
  renderWorkerLoad(analysis);
  renderWorkerDetail(selectedWorker, analysis);
  els.workerTable.innerHTML = visibleWorkers.length
    ? visibleWorkers
        .map((worker) => {
          const assigned = analysis.hoursByWorker.get(worker.id) || 0;
          const load = worker.maxHours ? Math.min(100, Math.round((assigned / worker.maxHours) * 100)) : 0;
          const inactive = !isWorkerActive(worker);
          const zoneText = worker.zones.join(", ");
          const skillText = labelsFor(worker.skills, skillNames).join(", ") || "Sense habilitats";
          const typeText = labelsFor(worker.serviceTypes, serviceTypeNames).join(", ") || "Sense tipus";
          const availabilityText = dayNames
            .filter((day) => worker.availability[day])
            .map((day) => `${day}: ${worker.availability[day].map((range) => range.join("-")).join(", ")}`)
            .join(" · ");
          return `
            <div class="worker-summary ${inactive ? "is-inactive" : ""}">
              <div>
                <strong>${escapeHtml(worker.name)}</strong>
                <p class="meta">${escapeHtml(worker.role)} · ${escapeHtml(worker.contractType)} · ${escapeHtml(worker.transport)}</p>
                <p class="meta">${escapeHtml(zoneText)}</p>
              </div>
              <div>
                <div class="progress-bar"><span style="width:${load}%"></span></div>
                <p class="meta">${escapeHtml(skillText)}</p>
                <p class="meta">${escapeHtml(typeText)}</p>
                <p class="meta">${escapeHtml(availabilityText || "Sense disponibilitat")}</p>
              </div>
              <div>
                <span class="pill ${inactive ? "danger" : assigned > worker.maxHours ? "danger" : ""}">${escapeHtml(worker.status)}</span>
                <span class="pill ${assigned > worker.maxHours ? "danger" : ""}">${formatHours(assigned)} / ${formatHours(worker.maxHours)}</span>
                <p class="meta">${formatCurrency(worker.hourlyCost)}/h · ${worker.experience}/${worker.quality}/${worker.reliability} · ${worker.acceptsOvertime ? "vol extres" : "sense extres"}</p>
              </div>
              <div class="worker-actions">
                <button class="icon-button" data-view-worker="${worker.id}" type="button" title="Veure detall">Detall</button>
                <button class="icon-button" data-edit-worker="${worker.id}" type="button" title="Editar parametres">Editar</button>
                <button class="icon-button" data-simulate-leave-worker="${worker.id}" type="button" title="Crear una simulació de reassignació per baixa">Simular baixa</button>
                ${
                  isWorkerActive(worker)
                    ? `<button class="icon-button danger-button" data-leave-worker="${worker.id}" type="button" title="Marcar baixa i recalcular">Baixa + recalcular</button>`
                    : `<button class="icon-button" data-activate-worker="${worker.id}" type="button" title="Reactivar treballador">Reactivar</button>`
                }
                <button class="icon-button danger-button" data-delete-worker="${worker.id}" type="button" title="Eliminar treballador">Eliminar</button>
              </div>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-state">No hi ha treballadors en aquest filtre.</p>`;

  document.querySelectorAll("[data-delete-worker]").forEach((button) => {
    button.addEventListener("click", () => {
      state.workers = state.workers.filter((worker) => worker.id !== button.dataset.deleteWorker);
      state.services = state.services.map((service) =>
        service.workerId === button.dataset.deleteWorker ? { ...service, workerId: "" } : service,
      );
      if (state.draftAssignments) {
        Object.entries(state.draftAssignments).forEach(([serviceId, workerId]) => {
          if (workerId === button.dataset.deleteWorker) state.draftAssignments[serviceId] = "";
        });
      }
      persist();
      render();
      showToast("Treballador eliminat.");
    });
  });

  document.querySelectorAll("[data-edit-worker]").forEach((button) => {
    button.addEventListener("click", () => editWorker(button.dataset.editWorker));
  });

  document.querySelectorAll("[data-view-worker]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedWorkerId = button.dataset.viewWorker;
      resetWorkerForm(false);
      persist();
      render();
    });
  });

  document.querySelectorAll("[data-leave-worker]").forEach((button) => {
    button.addEventListener("click", () => markWorkerOnLeaveAndRecalculate(button.dataset.leaveWorker));
  });

  document.querySelectorAll("[data-simulate-leave-worker]").forEach((button) => {
    button.addEventListener("click", () => simulateWorkerLeave(button.dataset.simulateLeaveWorker));
  });

  document.querySelectorAll("[data-activate-worker]").forEach((button) => {
    button.addEventListener("click", () => reactivateWorker(button.dataset.activateWorker));
  });
}

function renderWorkerLoad(analysis) {
  const visibleWorkers = state.workers.filter((worker) => matchesWorkerStatusFilter(worker));
  els.workerLoadTable.innerHTML = visibleWorkers.length
    ? visibleWorkers
        .map((worker) => {
          const assigned = analysis.hoursByWorker.get(worker.id) || 0;
          const target = Math.max(worker.maxHours || 1, 1);
          const pct = Math.min(140, Math.round((assigned / target) * 100));
          const overtime = Math.max(0, assigned - target);
          const missing = Math.max(0, target - assigned);
          return `
            <div class="load-row">
              <div>
                <strong>${escapeHtml(worker.name)}</strong>
                <p class="meta">${formatHours(assigned)} assignades · ${formatHours(target)} contractades · ${worker.acceptsOvertime ? "accepta extres" : "sense extres"}</p>
              </div>
              <div>
                <div class="progress-bar load-bar ${overtime ? "is-over" : ""}"><span style="width:${Math.min(pct, 100)}%"></span></div>
                <p class="meta">${overtime ? `${formatHours(overtime)} extres` : `${formatHours(missing)} disponibles`}</p>
              </div>
              <span class="pill ${overtime && !worker.acceptsOvertime ? "danger" : overtime ? "warning" : "success"}">${pct}%</span>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-state">Encara no hi ha treballadors.</p>`;
}

function renderWorkerDetail(worker, analysis) {
  els.workerDetailPanel.classList.toggle("is-hidden", !worker);
  if (!worker) return;
  const assigned = analysis.hoursByWorker.get(worker.id) || 0;
  const serviceCount = requiredServices().filter((service) => withEffectiveAssignment(service).workerId === worker.id).length;
  const statusClass = isWorkerActive(worker) ? "success" : "danger";
  els.workerDetailTitle.textContent = worker.name;
  els.workerDetailActions.innerHTML = `
    <button class="icon-button" data-edit-worker="${worker.id}" type="button">Editar</button>
    ${
      isWorkerActive(worker)
        ? `<button class="icon-button danger-button" data-leave-worker="${worker.id}" type="button">Donar de baixa</button>`
        : `<button class="icon-button" data-activate-worker="${worker.id}" type="button">Donar d'alta</button>`
    }
  `;
  els.workerDetailSummary.innerHTML = `
    <div class="summary-item"><strong><span class="pill ${statusClass}">${escapeHtml(worker.status)}</span></strong><span class="meta">${escapeHtml(worker.role)} · ${escapeHtml(worker.contractType)}</span></div>
    <div class="summary-item"><strong>${formatHours(assigned)} / ${formatHours(worker.maxHours)}</strong><span class="meta">Carrega setmanal</span></div>
    <div class="summary-item"><strong>${serviceCount}</strong><span class="meta">Serveis actius assignats</span></div>
    <div class="summary-item"><strong>${escapeHtml(worker.zones.join(", ") || "Sense zones")}</strong><span class="meta">Zones disponibles</span></div>
  `;
}

function openWorkerEditor() {
  resetWorkerForm(false);
  els.workerForm.classList.remove("is-hidden");
  els.workerForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function matchesWorkerStatusFilter(worker) {
  if (state.workerStatusFilter === "all") return true;
  if (state.workerStatusFilter === "inactive") return !isWorkerActive(worker);
  return isWorkerActive(worker);
}

function renderVacations() {
  fillVacationControls();
  renderVacationCalendar();
  const clientVacations = state.vacations.clients.map((vacation) => ({ ...vacation, type: "Client" }));
  const workerVacations = state.vacations.workers.map((vacation) => ({
    ...vacation,
    type: "Treballador",
    label: getWorker(vacation.workerId)?.name || "Treballador eliminat",
  }));
  const rows = [...clientVacations, ...workerVacations].sort((a, b) => a.start.localeCompare(b.start));

  els.vacationCount.textContent = `${rows.length} registres`;
  els.vacationTable.innerHTML = rows.length
    ? rows
        .map((vacation) => {
          const label = vacation.label || vacation.client;
          const deleteAttr = vacation.type === "Client" ? "data-delete-client-vacation" : "data-delete-worker-vacation";
          return `
            <div class="table-row">
              <div>
                <strong>${escapeHtml(label)}</strong>
                <p class="meta">${vacation.type}</p>
              </div>
              <div class="meta">${formatDateRange(vacation.start, vacation.end)}</div>
              <div><span class="pill">${escapeHtml(vacation.reason || "Vacances")}</span></div>
              <button class="icon-button danger-button" ${deleteAttr}="${vacation.id}" type="button">Eliminar</button>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-state">Encara no hi ha vacances o absencies registrades.</p>`;

  document.querySelectorAll("[data-delete-client-vacation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.vacations.clients = state.vacations.clients.filter((vacation) => vacation.id !== button.dataset.deleteClientVacation);
      persist();
      render();
      showToast("Vacances de client eliminades.");
    });
  });

  document.querySelectorAll("[data-delete-worker-vacation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.vacations.workers = state.vacations.workers.filter((vacation) => vacation.id !== button.dataset.deleteWorkerVacation);
      persist();
      render();
      showToast("Absencia eliminada.");
    });
  });
}

function renderVacationCalendar() {
  els.vacationCalendar.innerHTML = dayNames
    .map((day, index) => {
      const date = new Date(`${state.weekStart}T00:00:00`);
      date.setDate(date.getDate() + index);
      const isoDate = formatDateInput(date);
      const clients = state.vacations.clients.filter((vacation) => dateInRange(isoDate, vacation.start, vacation.end));
      const workers = state.vacations.workers.filter((vacation) => dateInRange(isoDate, vacation.start, vacation.end));
      const pausedServices = state.services.filter((service) => service.day === day && isClientOnVacation(service));
      const items = [
        ...clients.map((vacation) => ({ label: vacation.client, type: "Client" })),
        ...workers.map((vacation) => ({
          label: getWorker(vacation.workerId)?.name || "Treballador eliminat",
          type: vacation.reason || "Absencia",
        })),
      ];

      return `
        <article class="vacation-day ${items.length || pausedServices.length ? "has-items" : ""}">
          <header>
            <strong>${day}</strong>
            <span>${formatDisplayDate(isoDate)}</span>
          </header>
          ${
            items.length || pausedServices.length
              ? `
                <div class="vacation-tags">
                  ${items
                    .slice(0, 4)
                    .map((item) => `<span class="vacation-tag"><b>${escapeHtml(item.type)}</b>${escapeHtml(item.label)}</span>`)
                    .join("")}
                  ${
                    pausedServices.length
                      ? `<span class="vacation-tag muted"><b>Pausats</b>${pausedServices.length} serveis</span>`
                      : ""
                  }
                  ${items.length > 4 ? `<span class="vacation-tag muted"><b>Mes</b>+${items.length - 4}</span>` : ""}
                </div>
              `
              : `<p class="calendar-empty">Sense absencies</p>`
          }
        </article>
      `;
    })
    .join("");
}

function addService(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const days = getSelectedServiceDays();
  const durationHours = Number(data.durationHours);
  const recurrenceType = Object.hasOwn(recurrenceTypeNames, data.recurrenceType) ? data.recurrenceType : "weekly";
  const activeFrom = data.activeFrom || state.weekStart;
  const activeTo = data.activeTo || "";
  const editingRecurrence = event.currentTarget.dataset.editingRecurrence;
  const originalClient = event.currentTarget.dataset.editingClient;
  const clientName = data.client.trim();

  if (!days.length) return showToast("Selecciona com a minim un dia recurrent.");
  if (!durationHours || durationHours <= 0) return showToast("Les hores per visita han de ser superiors a 0.");
  if (activeTo && activeTo < activeFrom) return showToast("La data final ha de ser posterior a l'inici.");

  const recurringId = editingRecurrence || crypto.randomUUID();
  const end = addHours(data.start, durationHours);
  const newServices = days.map((day) => ({
    id: crypto.randomUUID(),
    client: clientName,
    zone: data.zone,
    day,
    start: data.start,
    end,
    priority: data.priority,
    requirements: data.requirements.trim(),
    recurrenceType,
    activeFrom,
    activeTo,
    recurringId,
    workerId: "",
    locked: false,
  }));

  if (editingRecurrence) {
    if (originalClient && originalClient !== clientName) renameClientReferences(originalClient, clientName);
    state.services = state.services.filter((service) => recurrenceKey(service) !== editingRecurrence);
    state.services.push(...newServices);
    state.selectedClient = clientName;
    if (!state.clientStatuses[clientName]) state.clientStatuses[clientName] = "Actiu";
    closeClientEditor(false);
    persist();
    render();
    showToast(`${clientName} actualitzat.`);
    return;
  }

  state.services.push(...newServices);
  state.selectedClient = clientName;
  if (!state.clientStatuses[clientName]) state.clientStatuses[clientName] = "Actiu";
  event.currentTarget.reset();
  event.currentTarget.elements.start.value = "09:00";
  event.currentTarget.elements.durationHours.value = "2";
  event.currentTarget.elements.activeFrom.value = state.weekStart;
  updateWeeklyPreview();
  persist();
  render();
  showToast(`${clientName} afegit: ${recurrenceTypeNames[recurrenceType]} · ${formatHours(days.length * durationHours)} per cicle.`);
}

function saveClientProfile(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const vetoedWorkers = [...els.clientProfileForm.elements.vetoedWorkers.selectedOptions].map((option) => option.value);
  const originalClient = event.currentTarget.dataset.editingClient;
  const clientName = data.client.trim();
  if (!clientName) return showToast("Introdueix el nom del client.");
  if (originalClient && originalClient !== clientName) renameClientReferences(originalClient, clientName);
  state.clientStatuses[clientName] = data.status === "Baixa" ? "Baixa" : "Actiu";
  state.clientProfiles[clientName] = {
    preferredWorkerId: data.preferredWorkerId || "",
    vetoedWorkers,
    preferredShift: data.preferredShift || "Indiferent",
    qualityLevel: Number(data.qualityLevel) || 3,
    continuityPolicy: data.continuityPolicy || "flexible",
    changePolicy: data.changePolicy || "free",
    notes: data.notes.trim(),
  };
  if (state.clientStatuses[clientName] === "Baixa") {
    state.services = state.services.map((service) => (service.client === clientName ? { ...service, workerId: "" } : service));
  }
  state.selectedClient = clientName;
  closeClientEditor(false);
  persist();
  render();
  showToast(`Fitxa de ${clientName} guardada.`);
}

function addWorker(event) {
  event.preventDefault();
  const worker = buildWorkerFromForm();
  if (!worker) return;

  const editingId = els.workerForm.dataset.editingWorkerId;
  if (editingId) {
    const previous = getWorker(editingId);
    state.workers = state.workers.map((item) =>
      item.id === editingId ? { ...worker, id: editingId, history: previous?.history || {} } : item,
    );
    state.selectedWorkerId = editingId;
    resetWorkerForm();
    persist();
    render();
    showToast(`${worker.name} actualitzat.`);
    return;
  }

  const workerId = crypto.randomUUID();
  state.workers.push({ ...worker, id: workerId, history: {} });
  state.selectedWorkerId = workerId;

  resetWorkerForm();
  persist();
  render();
  showToast(`${worker.name} afegit a l'equip.`);
}

function buildWorkerFromForm() {
  const data = Object.fromEntries(new FormData(els.workerForm));
  const zones = getSelectedWorkerZones();
  const skills = getCheckedValues(els.workerForm, "workerSkills");
  const serviceTypes = getCheckedValues(els.workerForm, "workerServiceTypes");
  const availability = getWorkerAvailability();

  if (!data.name.trim()) {
    showToast("Introdueix el nom del treballador.");
    return null;
  }
  if (!zones.length) {
    showToast("Selecciona com a minim una zona disponible.");
    return null;
  }
  if (!zones.includes(data.homeZone)) {
    showToast("La zona base tambe ha d'estar seleccionada com a zona disponible.");
    return null;
  }
  if (!skills.length) {
    showToast("Selecciona com a minim una habilitat o permis.");
    return null;
  }
  if (!serviceTypes.length) {
    showToast("Selecciona com a minim un tipus de servei.");
    return null;
  }
  if (!Object.keys(availability).length) {
    showToast("Selecciona com a minim un dia disponible amb hora d'inici i fi.");
    return null;
  }

  return {
    name: data.name.trim(),
    status: data.status,
    zones,
    homeZone: data.homeZone,
    role: data.role,
    contractType: data.contractType,
    transport: data.transport,
    skills,
    serviceTypes,
    maxHours: Number(data.maxHours),
    maxDailyHours: Number(data.maxDailyHours),
    acceptsOvertime: data.acceptsOvertime === "on",
    hourlyCost: Number(data.hourlyCost),
    preferredShift: data.preferredShift,
    travelBuffer: Number(data.travelBuffer),
    experience: Number(data.experience),
    quality: Number(data.quality),
    reliability: Number(data.reliability),
    availability,
  };
}

function addClientVacation(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  if (!validDateRange(data.start, data.end)) return showToast("Revisa les dates de vacances del client.");

  state.vacations.clients.push({
    id: crypto.randomUUID(),
    client: data.client,
    start: data.start,
    end: data.end,
    reason: data.reason.trim() || "Vacances",
  });
  state.services = state.services.map((service) => (service.client === data.client && isClientOnVacation(service) ? { ...service, workerId: "" } : service));
  const result = autoAssign();
  persist();
  render();
  showToast(`Vacances de ${data.client} afegides. Recalculat: ${result.assigned}/${requiredServices().length} serveis.`);
}

function addWorkerVacation(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const indefinite = Boolean(data.indefinite);
  const end = indefinite ? "" : data.end;
  if (!validOpenEndedDateRange(data.start, end)) return showToast("Revisa les dates de l'absencia.");

  state.vacations.workers.push({
    id: crypto.randomUUID(),
    workerId: data.workerId,
    start: data.start,
    end,
    indefinite,
    reason: data.reason,
  });
  state.services = state.services.map((service) =>
    service.workerId === data.workerId && isWorkerOnVacation(getWorker(data.workerId), service) ? { ...service, workerId: "" } : service,
  );
  if (state.draftAssignments) {
    Object.entries(state.draftAssignments).forEach(([serviceId, workerId]) => {
      const service = getService(serviceId);
      if (workerId === data.workerId && service && isWorkerOnVacation(getWorker(data.workerId), service)) state.draftAssignments[serviceId] = "";
    });
  }
  const result = autoAssign();
  persist();
  render();
  showToast(`Absencia ${indefinite ? "indefinida " : ""}afegida. Recalculat: ${result.assigned}/${requiredServices().length} serveis.`);
}

function autoAssign() {
  const result = findBestGlobalAssignment();
  applyAssignmentResult(result);
  return result;
}

function getAutoAssignmentPreview() {
  const result = findBestGlobalAssignment();
  const rows = coordinationAssignmentRows(result.assignments, state.draftMode);
  const changes = rows.filter((row) => row.changed);
  return { result, rows, changes };
}

function previewAutoAssignment() {
  const { result, rows, changes } = getAutoAssignmentPreview();
  if (!changes.length) {
    showToast("No hi ha cap optimització possible per a aquesta setmana.");
    return;
  }
  const confirmed = scoreCurrentAssignment(state.draftMode);
  const proposalScore = scoreAssignmentFromAssignments(result.assignments);
  pendingAutoAssignment = { result, rows, changes, confirmed, proposalScore, targetDraftMode: state.draftMode };
  renderAutoAssignmentModal();
}

function renderAutoAssignmentModal() {
  if (!pendingAutoAssignment) return;
  const { changes, confirmed, proposalScore, targetDraftMode } = pendingAutoAssignment;
  const delta = Math.round(proposalScore.score - confirmed.score);
  els.autoAssignModalTitle.textContent = targetDraftMode ? "Proposta per a la simulació" : "Proposta per a la planificació confirmada";
  els.autoAssignModalSubtitle.textContent = targetDraftMode
    ? "Si confirmes, aquests canvis quedaran com a assignació provisional dins la simulació."
    : "Si confirmes, aquests canvis s'aplicaran directament a la planificació confirmada.";
  els.autoAssignModalSummary.innerHTML = [
    ["Actual", Math.round(confirmed.score), confirmed.label],
    ["Proposta", Math.round(proposalScore.score), proposalScore.label],
    ["Diferencia", `${delta >= 0 ? "+" : ""}${delta}`, `${changes.length} assignacions modificades`],
    ["Coberts", proposalScore.assigned, "serveis amb treballador"],
    ["Mode", targetDraftMode ? "Simulació" : "Confirmat", targetDraftMode ? "provisional" : "aplicació directa"],
  ]
    .map(([label, value, detail]) => `<span class="modal-kpi"><strong>${escapeHtml(String(value))}</strong>${escapeHtml(label)}<small>${escapeHtml(detail)}</small></span>`)
    .join("");
  els.autoAssignModalChanges.innerHTML = changes.length
    ? changes
        .map((row) => `
          <div class="assignment-preview-row">
            <div>
              <strong>${escapeHtml(row.service.client)}</strong>
              <p class="meta">${serviceMeta(row.service)}</p>
            </div>
            <div>
              <span class="meta">Actual</span>
              <strong>${escapeHtml(row.confirmedName)}</strong>
              <p class="meta">${Math.round(row.confirmedScore)} punts</p>
            </div>
            <div>
              <span class="meta">Proposta automàtica</span>
              <strong>${escapeHtml(row.proposedName)}</strong>
              <p class="meta">${Math.round(row.proposedScore)} punts</p>
            </div>
            <div>
              <span class="pill ${row.delta >= 0 ? "success" : "danger"}">${row.delta >= 0 ? "+" : ""}${Math.round(row.delta)} punts</span>
            </div>
          </div>
        `)
        .join("")
    : `<p class="empty-state">L'optimitzador no faria cap canvi respecte a les assignacions actuals.</p>`;
  els.autoAssignModal.hidden = false;
  els.autoAssignModal.setAttribute("aria-hidden", "false");
  els.autoAssignConfirm.focus();
}

function confirmAutoAssignmentPreview() {
  if (!pendingAutoAssignment) return;
  const { result, targetDraftMode } = pendingAutoAssignment;
  const previousMode = state.draftMode;
  state.draftMode = targetDraftMode;
  applyAssignmentResult(result);
  state.draftMode = previousMode;
  pendingAutoAssignment = null;
  closeAutoAssignmentModal();
  persist();
  render();
  showToast(targetDraftMode ? "Proposta aplicada a la simulació." : "Proposta automàtica aplicada a la planificació confirmada.");
}

function discardAutoAssignmentPreview() {
  pendingAutoAssignment = null;
  closeAutoAssignmentModal();
  showToast("Proposta automàtica descartada.");
}

function closeAutoAssignmentModal() {
  els.autoAssignModal.hidden = true;
  els.autoAssignModal.setAttribute("aria-hidden", "true");
}

function applyAssignmentResult(result) {
  if (state.draftMode) {
    ensureDraftAssignments();
    requiredServices().forEach((service) => {
      state.draftAssignments[service.id] = result.assignments[service.id] || "";
    });
    return;
  }

  state.services = state.services.map((service) => ({
    ...service,
    workerId: result.assignments[service.id] || "",
  }));
  state.draftAssignments = {};
}

function optimizeCalendarRange() {
  const start = els.calendarRangeStart.value;
  const end = els.calendarRangeEnd.value;
  if (!validDateRange(start, end)) return showToast("Revisa el rang de dates.");

  const occurrences = occurrencesBetween(start, end).filter((item) => !item.paused);
  const serviceIds = [...new Set(occurrences.map((item) => item.id))];
  let assigned = 0;

  serviceIds.forEach((serviceId) => {
    const firstOccurrence = occurrences.find((item) => item.id === serviceId);
    const candidate = workerEligibilityForService(firstOccurrence).find((item) => item.result.valid);
    const service = getService(serviceId);
    if (service && candidate) {
      setServiceAssignment(service, candidate.worker.id);
      assigned += 1;
    }
  });

  persist();
  render();
  showToast(state.draftMode ? `Rang afegit a la simulació: ${assigned}/${serviceIds.length} serveis.` : `Rang optimitzat: ${assigned}/${serviceIds.length} serveis amb candidat.`);
}

function completeService(serviceId, date, source = "modal") {
  const service = getService(serviceId);
  const worker = getWorker(service?.workerId);
  if (!service || !worker) return showToast("Cal un treballador assignat per registrar el servei.");
  const alreadyDone = state.serviceLogs.some((log) => log.serviceId === serviceId && log.date === date);
  if (alreadyDone) return showToast("Aquest servei ja consta com a fet.");

  state.serviceLogs.push({
    id: crypto.randomUUID(),
    serviceId,
    date,
    client: service.client,
    workerId: worker.id,
    workerName: worker.name,
    notes: "Completat des del calendari",
  });
  worker.history = worker.history || {};
  const history = worker.history[service.client] || { visits: 0, lastVisit: "", preferenceFit: 3 };
  worker.history[service.client] = {
    visits: Number(history.visits || 0) + 1,
    lastVisit: date,
    preferenceFit: history.preferenceFit || 3,
  };
  persist();
  render();
  if (source === "modal") openCalendarDayModal(date);
  showToast("Servei marcat com a fet.");
}

function markWorkerOnLeaveAndRecalculate(workerId) {
  const worker = getWorker(workerId);
  if (!worker) return;
  worker.status = "Baixa";
  state.selectedWorkerId = workerId;
  state.services = state.services.map((service) => (service.workerId === workerId ? { ...service, workerId: "" } : service));
  if (state.draftMode) {
    ensureDraftAssignments();
    Object.entries(state.draftAssignments).forEach(([serviceId, assignedWorkerId]) => {
      if (assignedWorkerId === workerId) state.draftAssignments[serviceId] = "";
    });
  }
  const result = autoAssign();
  persist();
  render();
  const totalRequired = requiredServices().length;
  const uncovered = totalRequired - result.assigned;
  showToast(
    `${worker.name} en baixa. Recalculat: ${result.assigned}/${totalRequired} serveis coberts${uncovered ? `, ${uncovered} pendents` : ""}.`,
  );
}

function ensureDraftAssignments() {
  if (!state.draftAssignments || typeof state.draftAssignments !== "object" || Array.isArray(state.draftAssignments)) {
    state.draftAssignments = {};
  }
  state.services.forEach((service) => {
    if (!Object.hasOwn(state.draftAssignments, service.id)) state.draftAssignments[service.id] = service.workerId || "";
  });
}

function effectiveWorkerId(service, useDraft = state.draftMode) {
  if (!service) return "";
  if (useDraft && state.draftMode && Object.hasOwn(state.draftAssignments || {}, service.id)) return state.draftAssignments[service.id] || "";
  return service.workerId || "";
}

function withEffectiveAssignment(service, useDraft = true) {
  return { ...service, workerId: effectiveWorkerId(service, useDraft) };
}

function setServiceAssignment(service, workerId) {
  if (!service) return;
  if (state.draftMode) {
    ensureDraftAssignments();
    state.draftAssignments[service.id] = workerId || "";
  } else {
    const target = getService(service.id);
    if (target) target.workerId = workerId || "";
  }
}

function toggleServiceLock(serviceId) {
  const service = getService(serviceId);
  if (!service) return;
  service.locked = !service.locked;
  persist();
  render();
  showToast(service.locked ? "Assignacio fixada. L'optimitzador no la tocara." : "Assignacio alliberada.");
}

function draftChangeCount() {
  if (!state.draftMode) return 0;
  ensureDraftAssignments();
  return state.services.filter((service) => (state.draftAssignments[service.id] || "") !== (service.workerId || "")).length;
}

function removeDraftAssignmentsForMissingServices() {
  if (!state.draftAssignments) return;
  const serviceIds = new Set(state.services.map((service) => service.id));
  Object.keys(state.draftAssignments).forEach((serviceId) => {
    if (!serviceIds.has(serviceId)) delete state.draftAssignments[serviceId];
  });
}

function confirmDraftAssignments() {
  if (!state.draftMode) return;
  ensureDraftAssignments();
  state.services = state.services.map((service) => ({ ...service, workerId: state.draftAssignments[service.id] || "" }));
  state.draftAssignments = {};
  persist();
  render();
  showToast("Simulació aplicada. Les assignacions proposades passen a ser la planificació confirmada.");
}

function discardDraftAssignments() {
  state.draftAssignments = {};
  persist();
  render();
  showToast("Simulació descartada. Es mantenen les assignacions confirmades.");
}

function reactivateWorker(workerId) {
  const worker = getWorker(workerId);
  if (!worker) return;
  worker.status = "Actiu";
  state.selectedWorkerId = workerId;
  persist();
  render();
  showToast(`${worker.name} reactivat. Pots optimitzar la setmana de nou.`);
}

function simulateWorkerLeave(workerId) {
  const worker = getWorker(workerId);
  if (!worker) return;
  state.draftMode = true;
  ensureDraftAssignments();
  Object.entries(state.draftAssignments).forEach(([serviceId, assignedWorkerId]) => {
    if (assignedWorkerId === workerId) state.draftAssignments[serviceId] = "";
  });
  state.simulatedUnavailableWorkerId = workerId;
  const result = autoAssign();
  delete state.simulatedUnavailableWorkerId;
  persist();
  render();
  showToast(`Simulació de baixa de ${worker.name}: ${result.assigned}/${requiredServices().length} serveis coberts en proposta.`);
}

function editWorker(workerId) {
  const worker = getWorker(workerId);
  if (!worker) return;
  els.workerForm.classList.remove("is-hidden");
  els.workerForm.dataset.editingWorkerId = worker.id;
  state.selectedWorkerId = worker.id;
  els.workerFormTitle.textContent = `Editar ${worker.name}`;
  els.workerSubmitButton.textContent = "Guardar canvis";

  const fields = els.workerForm.elements;
  fields.name.value = worker.name;
  fields.role.value = worker.role;
  fields.status.value = worker.status;
  fields.contractType.value = worker.contractType;
  fields.homeZone.value = worker.homeZone;
  fields.transport.value = worker.transport;
  fields.maxHours.value = worker.maxHours;
  fields.maxDailyHours.value = worker.maxDailyHours;
  fields.acceptsOvertime.checked = Boolean(worker.acceptsOvertime);
  fields.hourlyCost.value = worker.hourlyCost;
  fields.preferredShift.value = worker.preferredShift;
  fields.travelBuffer.value = worker.travelBuffer;
  fields.experience.value = worker.experience;
  fields.quality.value = worker.quality;
  fields.reliability.value = worker.reliability;

  setCheckedValues(els.workerForm, "workerZones", worker.zones);
  setCheckedValues(els.workerForm, "workerSkills", worker.skills);
  setCheckedValues(els.workerForm, "workerServiceTypes", worker.serviceTypes);
  setWorkerAvailability(worker.availability);
  persist();
  els.workerForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetWorkerForm(scroll = true) {
  delete els.workerForm.dataset.editingWorkerId;
  els.workerForm.reset();
  els.workerFormTitle.textContent = "Nou treballador";
  els.workerSubmitButton.textContent = "Desar treballador";
  els.workerForm.classList.add("is-hidden");
  els.workerForm.elements.maxHours.value = 30;
  els.workerForm.elements.maxDailyHours.value = 8;
  els.workerForm.elements.acceptsOvertime.checked = false;
  els.workerForm.elements.hourlyCost.value = 14;
  els.workerForm.elements.experience.value = 3;
  els.workerForm.elements.quality.value = 4;
  els.workerForm.elements.reliability.value = 4;
  setCheckedValues(els.workerForm, "workerZones", []);
  setCheckedValues(els.workerForm, "workerSkills", []);
  setCheckedValues(els.workerForm, "workerServiceTypes", []);
  setWorkerAvailability({});
  if (scroll) document.querySelector("#workers .panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function assignBestService(serviceId) {
  const service = getService(serviceId);
  const candidate = bestCandidateForService(serviceId);
  if (!service || !candidate) return showToast("No hi ha cap candidat directe per aquest servei.");
  setServiceAssignment(service, candidate.id);
  persist();
  render();
  showToast(state.draftMode ? `${candidate.name} afegit a la simulació de ${service.client}.` : `${candidate.name} assignat a ${service.client}.`);
}

function analyzeSchedule() {
  const conflicts = [];
  const byService = new Map();
  const hoursByWorker = new Map(state.workers.map((worker) => [worker.id, 0]));
  const services = requiredServices().map((service) => withEffectiveAssignment(service));
  const totalHours = services.reduce((sum, service) => sum + duration(service), 0);
  const coveredHours = services.filter((service) => service.workerId).reduce((sum, service) => sum + duration(service), 0);
  const openServices = services.filter((service) => !service.workerId).length;

  const addConflict = (service, message) => {
    const conflict = { service, message };
    conflicts.push(conflict);
    const serviceConflicts = byService.get(service.id) || [];
    serviceConflicts.push(conflict);
    byService.set(service.id, serviceConflicts);
  };

  services.forEach((service) => {
    if (!service.workerId) {
      addConflict(service, "Servei sense treballador assignat.");
      return;
    }

    const worker = getWorker(service.workerId);
    if (!worker) {
      addConflict(service, "El treballador assignat ja no existeix.");
      return;
    }

    hoursByWorker.set(worker.id, (hoursByWorker.get(worker.id) || 0) + duration(service));
    if (!isWorkerActive(worker)) addConflict(service, `${worker.name} no esta actiu/va.`);
    if (isWorkerOnVacation(worker, service)) addConflict(service, `${worker.name} esta d'absencia aquest dia.`);
    if (!worker.zones.includes(service.zone)) addConflict(service, `${worker.name} no te aquesta zona configurada.`);
    if (!isWithinAvailability(worker, service)) addConflict(service, `${worker.name} no esta disponible en aquesta franja.`);
  });

  state.workers.forEach((worker) => {
    const assigned = orderedServices(services.filter((service) => service.workerId === worker.id));
    if ((hoursByWorker.get(worker.id) || 0) > worker.maxHours && !worker.acceptsOvertime) {
      assigned.forEach((service) => addConflict(service, `${worker.name} supera les hores maximes setmanals.`));
    }

    for (let i = 0; i < assigned.length; i += 1) {
      for (let j = i + 1; j < assigned.length; j += 1) {
        if (assigned[i].day === assigned[j].day && overlaps(assigned[i], assigned[j])) {
          addConflict(assigned[j], `${worker.name} te un solapament amb ${assigned[i].client}.`);
        }
      }
    }
  });

  return {
    conflicts,
    byService,
    hoursByWorker,
    totalHours,
    coveredHours,
    openHours: totalHours - coveredHours,
    openServices,
  };
}

function bestCandidateForService(serviceId) {
  const service = getService(serviceId);
  if (!service || isClientOnVacation(service)) return null;

  return workerEligibilityForService(service)
    .filter((candidate) => candidate.result.valid)
    .sort((a, b) => b.result.score - a.result.score || a.worker.name.localeCompare(b.worker.name))[0]?.worker;
}

function serviceCandidatesForDashboard(service) {
  return workerEligibilityForService(service)
    .filter((candidate) => candidate.result.valid)
    .slice(0, 5);
}

function bestCandidateForOccurrence(service) {
  if (!service || isClientOnVacation(service)) return null;
  const sameDayServices = getOccurrencesForDate(service.date).filter((item) => item.id !== service.id && item.workerId && !item.paused);
  const hoursByWorker = new Map(state.workers.map((worker) => [worker.id, 0]));
  sameDayServices.forEach((assigned) => {
    hoursByWorker.set(assigned.workerId, (hoursByWorker.get(assigned.workerId) || 0) + duration(assigned));
  });

  return state.workers
    .filter((worker) => workerCanTake(worker, service, sameDayServices, hoursByWorker))
    .sort(
      (a, b) =>
        workerScore(b, service, hoursByWorker) - workerScore(a, service, hoursByWorker) ||
        a.name.localeCompare(b.name),
    )[0];
}

function workerEligibilityForService(service) {
  if (!service) return [];
  const workerState = workerStateWithoutService(service.id);
  return state.workers
    .map((worker) => ({
      worker,
      result: evaluateWorkerForService(worker, service, workerState),
    }))
    .sort((a, b) => {
      if (a.result.valid !== b.result.valid) return a.result.valid ? -1 : 1;
      if (a.result.valid) return b.result.score - a.result.score || a.worker.name.localeCompare(b.worker.name);
      return a.worker.name.localeCompare(b.worker.name);
    });
}

function workerStateWithoutService(serviceId) {
  const workerState = createEmptyWorkerState();
  requiredServices()
    .map((service) => withEffectiveAssignment(service))
    .filter((service) => service.id !== serviceId && service.workerId && getWorker(service.workerId))
    .forEach((service) => applyWorkerState(service.workerId, service, workerState, 1));
  return workerState;
}

function workerUnavailableReason(reason, worker, service) {
  const labels = {
    baixa: `no actiu (${worker.status})`,
    "baixa simulada": "baixa simulada",
    "vetat client": "vetat pel client",
    zona: `fora de zona ${service.zone}`,
    absencia: "absencia aquest dia",
    "hores setmanals": "supera hores setmanals",
    "hores diaries": "supera hores diaries",
    "client requereix conegut": "client requereix persona coneguda",
    disponibilitat: "fora de disponibilitat",
    habilitats: "falten habilitats",
    "tipus servei": "tipus de servei no configurat",
    solapament: "solapament horari",
  };
  return labels[reason] || reason || "no disponible";
}

function findBestGlobalAssignment() {
  const allServices = assignmentOrder(requiredServices().map((service) => withEffectiveAssignment(service)));
  const lockedServices = allServices.filter((service) => service.locked && service.workerId);
  const services = allServices.filter((service) => !service.locked);
  const workerState = createEmptyWorkerState();
  const lockedAssignments = {};
  let lockedScore = 0;
  let lockedAssigned = 0;
  lockedServices.forEach((service) => {
    const worker = getWorker(service.workerId);
    const result = worker ? evaluateWorkerForService(worker, service, workerState) : invalidScore("treballador");
    lockedAssignments[service.id] = service.workerId;
    lockedScore += result.valid ? result.score : -serviceMissPenalty(service);
    if (worker && result.valid) {
      lockedAssigned += 1;
      applyWorkerState(worker.id, service, workerState, 1);
    }
  });
  let best = { score: Number.NEGATIVE_INFINITY, assignments: { ...lockedAssignments }, assigned: lockedAssigned };
  let explored = 0;

  const search = (index, assignments, currentScore, assignedCount) => {
    explored += 1;
    if (index >= services.length) {
      if (lockedScore + currentScore > best.score) {
        best = {
          score: lockedScore + currentScore,
          assignments: { ...lockedAssignments, ...assignments },
          assigned: lockedAssigned + assignedCount,
          explored,
        };
      }
      return;
    }

    const service = services[index];
    const candidates = state.workers
      .map((worker) => ({
        worker,
        result: evaluateWorkerForService(worker, service, workerState),
      }))
      .filter((candidate) => candidate.result.valid)
      .sort((a, b) => b.result.score - a.result.score || a.worker.name.localeCompare(b.worker.name));

    candidates.forEach(({ worker, result }) => {
      applyWorkerState(worker.id, service, workerState, 1);
      assignments[service.id] = worker.id;
      search(index + 1, assignments, currentScore + result.score, assignedCount + 1);
      delete assignments[service.id];
      applyWorkerState(worker.id, service, workerState, -1);
    });

    const missPenalty = serviceMissPenalty(service);
    search(index + 1, assignments, currentScore - missPenalty, assignedCount);
  };

  search(0, {}, 0, 0);
  best.explored = explored;
  return best;
}

function scoreCurrentAssignment(useDraft = true) {
  return scoreAssignment(useDraft);
}

function scoreAssignment(useDraft = true) {
  const workerState = createEmptyWorkerState();
  const services = assignmentOrder(requiredServices().map((service) => withEffectiveAssignment(service, useDraft)));
  let score = 0;
  let assigned = 0;

  services.forEach((service) => {
    const worker = getWorker(service.workerId);
    if (!worker) {
      score -= serviceMissPenalty(service);
      return;
    }

    const result = evaluateWorkerForService(worker, service, workerState);
    score += result.valid ? result.score : -serviceMissPenalty(service);
    if (result.valid) {
      assigned += 1;
      applyWorkerState(worker.id, service, workerState, 1);
    }
  });

  return {
    score,
    assigned,
    label: `${assigned}/${services.length} serveis actius assignats`,
  };
}

function scoreAssignmentFromAssignments(assignments) {
  const workerState = createEmptyWorkerState();
  const services = assignmentOrder(requiredServices().map((service) => ({ ...service, workerId: assignments[service.id] || "" })));
  let score = 0;
  let assigned = 0;

  services.forEach((service) => {
    const worker = getWorker(service.workerId);
    if (!worker) {
      score -= serviceMissPenalty(service);
      return;
    }
    const result = evaluateWorkerForService(worker, service, workerState);
    score += result.valid ? result.score : -serviceMissPenalty(service);
    if (result.valid) {
      assigned += 1;
      applyWorkerState(worker.id, service, workerState, 1);
    }
  });

  return {
    score,
    assigned,
    label: `${assigned}/${services.length} serveis actius assignats`,
  };
}

function createEmptyWorkerState() {
  return {
    hours: new Map(state.workers.map((worker) => [worker.id, 0])),
    dayHours: new Map(state.workers.map((worker) => [worker.id, new Map(dayNames.map((day) => [day, 0]))])),
    services: new Map(state.workers.map((worker) => [worker.id, []])),
  };
}

function evaluateWorkerForService(worker, service, workerState) {
  const assignedHours = workerState.hours.get(worker.id) || 0;
  const projectedHours = assignedHours + duration(service);
  const projectedDailyHours = (workerState.dayHours.get(worker.id)?.get(service.day) || 0) + duration(service);
  const assignedServices = workerState.services.get(worker.id) || [];
  const hasOverlap = assignedServices.some(
    (assigned) => assigned.day === service.day && overlapsWithBuffer(assigned, service, worker.travelBuffer),
  );
  const profile = clientProfileFor(service.client);
  const history = workerClientHistory(worker, service.client);

  if (state.simulatedUnavailableWorkerId === worker.id) return invalidScore("baixa simulada");
  if (!isWorkerActive(worker)) return invalidScore("baixa");
  if (profile.vetoedWorkers.includes(worker.id)) return invalidScore("vetat client");
  if (profile.continuityPolicy === "requireKnown" && profile.preferredWorkerId !== worker.id && !history) return invalidScore("client requereix conegut");
  if (!worker.zones.includes(service.zone)) return invalidScore("zona");
  if (isWorkerOnVacation(worker, service)) return invalidScore("absencia");
  if (projectedDailyHours > worker.maxDailyHours) return invalidScore("hores diaries");
  if (!isWithinAvailability(worker, service)) return invalidScore("disponibilitat");
  if (!hasRequiredCapabilities(worker, service)) return invalidScore("habilitats");
  if (!canDoServiceType(worker, service)) return invalidScore("tipus servei");
  if (hasOverlap) return invalidScore("solapament");

  return {
    valid: true,
    score: serviceBaseScore(service) + workerScore(worker, service, workerState.hours),
  };
}

function invalidScore(reason) {
  return { valid: false, score: Number.NEGATIVE_INFINITY, reason };
}

function applyWorkerState(workerId, service, workerState, direction) {
  workerState.hours.set(workerId, (workerState.hours.get(workerId) || 0) + direction * duration(service));
  const dayMap = workerState.dayHours.get(workerId);
  dayMap.set(service.day, (dayMap.get(service.day) || 0) + direction * duration(service));
  const services = workerState.services.get(workerId);
  if (direction > 0) {
    services.push(service);
  } else {
    const index = services.findIndex((item) => item.id === service.id);
    if (index >= 0) services.splice(index, 1);
  }
}

function serviceBaseScore(service) {
  return 55 + priorityWeight(service.priority) + duration(service) * 4;
}

function serviceMissPenalty(service) {
  return 90 + priorityWeight(service.priority) * 1.4 + duration(service) * 8;
}

function priorityWeight(priority) {
  return { Alta: 32, Mitjana: 18, Baixa: 8 }[priority] ?? 12;
}

function workerCanTake(worker, service, assignedServices, assignedHours) {
  const projectedHours = (assignedHours.get(worker.id) || 0) + duration(service);
  const workerAssigned = assignedServices.filter((assigned) => assigned.workerId === worker.id);
  const hasOverlap = workerAssigned.some(
    (assigned) => assigned.day === service.day && overlapsWithBuffer(assigned, service, worker.travelBuffer),
  );
  const projectedDailyHours = dayAssignedHours(worker.id, service.day, assignedServices) + duration(service);

  return (
    isWorkerActive(worker) &&
    worker.zones.includes(service.zone) &&
    !isWorkerOnVacation(worker, service) &&
    projectedDailyHours <= worker.maxDailyHours &&
    isWithinAvailability(worker, service) &&
    hasRequiredCapabilities(worker, service) &&
    canDoServiceType(worker, service) &&
    !hasOverlap
  );
}

function workerScore(worker, service, hoursByWorker) {
  return scoreBreakdown(worker, service, hoursByWorker).total;
}

function scoreBreakdown(worker, service, hoursByWorker) {
  const currentHours = hoursByWorker.get(worker.id) || 0;
  const projectedHours = currentHours + duration(service);
  const targetHours = Math.max(Number(worker.maxHours) || 0, 1);
  const cost = Number(worker.hourlyCost) || 0;
  const serviceType = serviceTypeForService(service);
  const history = workerClientHistory(worker, service.client);
  const profile = clientProfileFor(service.client);
  const components = [
    ["Base treballador", 100],
    ["Zona base", worker.homeZone === service.zone ? 12 : 0],
    ["Tipus de servei", worker.serviceTypes.includes(serviceType) ? 10 : 0],
    ["Treballador preferit", profile.preferredWorkerId === worker.id ? 35 : 0],
    ["Horari preferent client", profile.preferredShift === worker.preferredShift ? 8 : 0],
    ["Continuitat client", clientContinuityScore(history) + (profile.continuityPolicy === "preferSame" && history ? 18 : 0)],
    ["Fiabilitat", Number(worker.reliability || 3) * 4],
    ["Qualitat", Number(worker.quality || 3) * 3 + Math.max(0, Number(profile.qualityLevel || 3) - 3) * Number(worker.quality || 3)],
    ["Experiencia", Number(worker.experience || 3) * 2],
    ["Torn", preferredShiftMatches(worker, service) ? 6 : 0],
    ["Carrega i extres", workloadFitScore(worker, service, currentHours, projectedHours, targetHours)],
    ["Cost", -cost * 0.6],
    ["Marge desplacament", -Number(worker.travelBuffer || 0) / 20],
  ];
  return {
    total: components.reduce((sum, [, value]) => sum + value, 0),
    components,
    history,
    currentHours,
    projectedHours,
  };
}

function mainScoreReason(worker, service) {
  const breakdown = scoreBreakdown(worker, service, workerStateWithoutService(service.id).hours);
  const best = breakdown.components
    .filter(([, value]) => Math.abs(value) > 0)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))[0];
  return best ? `${best[0]} ${best[1] >= 0 ? "+" : ""}${Math.round(best[1])}` : "Millor encaix global";
}

function renderScoreBreakdown(service, limit = 3) {
  if (!state.developerMode || service.paused) return "";
  const candidates = workerEligibilityForService(service).filter((candidate) => candidate.result.valid).slice(0, limit);
  if (!candidates.length) return "";
  return `
    <details class="score-breakdown">
      <summary>Desglossament de punts</summary>
      ${candidates
        .map(({ worker }) => {
          const breakdown = scoreBreakdown(worker, service, workerStateWithoutService(service.id).hours);
          const components = breakdown.components
            .filter(([, value]) => Math.abs(value) >= 1)
            .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
            .slice(0, 6);
          return `
            <div class="score-candidate">
              <strong>${escapeHtml(worker.name)} · ${Math.round(serviceBaseScore(service) + breakdown.total)} punts</strong>
              <p class="meta">${components.map(([label, value]) => `${label} ${value >= 0 ? "+" : ""}${Math.round(value)}`).join(" · ")}</p>
            </div>
          `;
        })
        .join("")}
    </details>
  `;
}

function workloadFitScore(worker, service, currentHours, projectedHours, targetHours) {
  const serviceHours = duration(service);
  const fillableHours = Math.max(0, Math.min(serviceHours, targetHours - currentHours));
  const overtimeHours = Math.max(0, projectedHours - targetHours);
  let score = fillableHours * 4.5;

  if (projectedHours <= targetHours) {
    const loadAfter = projectedHours / targetHours;
    if (loadAfter < 0.65) score += 8;
    if (loadAfter >= 0.85 && loadAfter <= 1) score += 12;
    return score;
  }

  if (worker.acceptsOvertime) {
    return score + Math.max(0, 8 - overtimeHours * 1.5);
  }

  return score - overtimeHours * 42;
}

function bindBestButtons() {
  document.querySelectorAll("[data-best-service]").forEach((button) => {
    button.addEventListener("click", () => assignBestService(button.dataset.bestService));
  });

  document.querySelectorAll("[data-best-service-select]").forEach((select) => {
    select.addEventListener("change", () => {
      const service = getService(select.dataset.bestServiceSelect);
      const worker = getWorker(select.value);
      if (!service || !worker) return;
      setServiceAssignment(service, worker.id);
      persist();
      render();
      showToast(state.draftMode ? `${worker.name} afegit a la simulació.` : `${worker.name} assignat.`);
    });
  });
}

function bindDashboardNavigation() {
  document.querySelectorAll("[data-go-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.goView));
  });
}

function sortIncidents(a, b) {
  const rank = { critical: 0, warning: 1, muted: 2 };
  return (rank[a.severity] ?? 3) - (rank[b.severity] ?? 3) || a.title.localeCompare(b.title);
}

function serviceMeta(service) {
  return `${service.day} · ${service.start}-${service.end} · ${service.zone} · ${formatHours(duration(service))}`;
}

function groupServicesByClient(services) {
  const groups = new Map();
  services.forEach((service) => {
    const group = groups.get(service.client) || [];
    group.push(service);
    groups.set(service.client, group);
  });
  return groups;
}

function isNewClient(client) {
  return !state.workers.some((worker) => workerClientHistory(worker, client));
}

function currentWeekWorkerAbsences() {
  return state.vacations.workers
    .filter((vacation) => overlapsCurrentWeek(vacation.start, vacation.end))
    .map((vacation) => {
      const worker = getWorker(vacation.workerId);
      const affected = worker
        ? requiredServices()
            .map((service) => withEffectiveAssignment(service))
            .filter((service) => service.workerId === worker.id && dateInRange(serviceDateISO(service), vacation.start, vacation.end))
        : [];
      return worker ? { worker, vacation, affected } : null;
    })
    .filter(Boolean);
}

function currentWeekClientVacations() {
  return state.vacations.clients
    .filter((vacation) => overlapsCurrentWeek(vacation.start, vacation.end))
    .map((vacation) => ({
      vacation,
      paused: state.services.filter(
        (service) => service.client === vacation.client && dateInRange(serviceDateISO(service), vacation.start, vacation.end),
      ),
    }))
    .filter(({ paused }) => paused.length);
}

function overlapsCurrentWeek(start, end) {
  const weekStart = state.weekStart;
  const weekEnd = formatDateInput(addDays(new Date(`${state.weekStart}T00:00:00`), 4));
  return start <= weekEnd && (!end || end >= weekStart);
}

function fillZoneControls() {
  els.serviceForm.elements.zone.innerHTML = zoneNames.map((zone) => `<option>${zone}</option>`).join("");
  els.workerZones.innerHTML = zoneNames
    .map(
      (zone) => `
        <label class="day-check">
          <input name="workerZones" type="checkbox" value="${zone}" />
          ${zone}
        </label>
      `,
    )
    .join("");
}

function fillDayControls() {
  els.serviceDays.innerHTML = dayNames
    .map(
      (day) => `
        <label class="day-check">
          <input name="days" type="checkbox" value="${day}" />
          ${day}
        </label>
      `,
    )
    .join("");
}

function fillWorkerParameterControls() {
  fillSelect(els.workerForm.elements.role, roleNames);
  fillSelect(els.workerForm.elements.status, workerStatusNames);
  fillSelect(els.workerForm.elements.contractType, contractTypeNames);
  fillSelect(els.workerForm.elements.homeZone, zoneNames);
  fillSelect(els.workerForm.elements.transport, transportNames);
  fillSelect(els.workerForm.elements.preferredShift, preferredShiftNames);
  fillSelect(
    els.workerForm.elements.travelBuffer,
    travelBufferOptions.map((option) => ({ value: option.value, label: option.label })),
  );
  fillSelect(els.workerForm.elements.experience, scoreNames, "3");
  fillSelect(els.workerForm.elements.quality, scoreNames, "4");
  fillSelect(els.workerForm.elements.reliability, scoreNames, "4");

  els.workerSkills.innerHTML = renderCheckboxOptions("workerSkills", skillNames);
  els.workerServiceTypes.innerHTML = renderCheckboxOptions("workerServiceTypes", serviceTypeNames);
}

function fillWorkerAvailabilityControls() {
  els.workerAvailability.innerHTML = dayNames
    .map(
      (day) => `
        <label class="availability-row">
          <span class="day-toggle">
            <input name="availableDays" type="checkbox" value="${day}" />
            ${day}
          </span>
          <span class="time-pair">
            <input data-availability-start="${day}" type="time" value="08:00" aria-label="${day} inici" />
            <input data-availability-end="${day}" type="time" value="16:00" aria-label="${day} fi" />
          </span>
        </label>
      `,
    )
    .join("");
}

function fillVacationControls() {
  const clientOptions = uniqueClients().map((client) => `<option value="${escapeHtml(client)}">${escapeHtml(client)}</option>`).join("");
  const workerOptions = state.workers
    .map((worker) => `<option value="${worker.id}">${escapeHtml(worker.name)}</option>`)
    .join("");

  els.clientVacationForm.elements.client.innerHTML = clientOptions;
  els.workerVacationForm.elements.workerId.innerHTML = workerOptions;

  const monday = state.weekStart;
  if (!els.clientVacationForm.elements.start.value) els.clientVacationForm.elements.start.value = monday;
  if (!els.clientVacationForm.elements.end.value) els.clientVacationForm.elements.end.value = monday;
  if (!els.workerVacationForm.elements.start.value) els.workerVacationForm.elements.start.value = monday;
  if (!els.workerVacationForm.elements.end.value) els.workerVacationForm.elements.end.value = monday;
  updateWorkerIndefiniteControl();
}

function updateWorkerIndefiniteControl() {
  const indefinite = els.workerVacationForm.elements.indefinite.checked;
  const endInput = els.workerVacationForm.elements.end;
  endInput.disabled = indefinite;
  endInput.required = !indefinite;
  if (indefinite) endInput.value = "";
  if (!indefinite && !endInput.value) endInput.value = els.workerVacationForm.elements.start.value || state.weekStart;
}

function fillCalendarControls() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, index) => currentYear - 1 + index);
  if (!years.includes(Number(state.calendarYear))) years.unshift(Number(state.calendarYear) || currentYear);
  fillSelect(
    els.calendarYear,
    years.map((year) => ({ value: year, label: String(year) })),
    state.calendarYear,
  );

  const clientOptions = [
    { value: "all", label: "Tots els clients" },
    ...uniqueClients().map((client) => ({ value: client, label: client })),
  ];
  fillSelect(els.calendarClientFilter, clientOptions, state.calendarClient || "all");
  els.calendarStatusFilter.value = state.calendarStatus || "all";
  els.calendarRangeStart.value = state.calendarRangeStart || `${state.calendarYear}-01-01`;
  els.calendarRangeEnd.value = state.calendarRangeEnd || `${state.calendarYear}-12-31`;
}

function fillClientProfileControls() {
  fillSelect(
    els.clientProfileForm.elements.preferredWorkerId,
    [{ value: "", label: "Sense preferit" }, ...state.workers.map((worker) => ({ value: worker.id, label: worker.name }))],
  );
  fillSelect(
    els.clientProfileForm.elements.vetoedWorkers,
    state.workers.map((worker) => ({ value: worker.id, label: worker.name })),
  );
  fillSelect(els.clientProfileForm.elements.preferredShift, preferredShiftNames);
}

function clientContinuityLabel(policy) {
  return {
    flexible: "Continuitat flexible",
    preferSame: "Prioritza persona coneguda",
    requireKnown: "Nomes persona coneguda",
  }[policy] || "Continuitat flexible";
}

function getRecurrenceSummaries() {
  const groups = new Map();
  state.services.forEach((service) => {
    const id = recurrenceKey(service);
    const existing = groups.get(id) || {
      id,
      client: service.client,
      zone: service.zone,
      priority: service.priority,
      start: service.start,
      end: service.end,
      days: [],
      weeklyHours: 0,
      hoursPerVisit: duration(service),
      recurrenceType: service.recurrenceType || "weekly",
      activeFrom: service.activeFrom,
      activeTo: service.activeTo,
    };
    existing.days.push(service.day);
    existing.weeklyHours += duration(service);
    existing.hoursPerVisit = duration(service);
    groups.set(id, existing);
  });

  return [...groups.values()].sort((a, b) => a.client.localeCompare(b.client));
}

function getSelectedServiceDays() {
  return [...els.serviceForm.querySelectorAll('input[name="days"]:checked')].map((input) => input.value);
}

function getSelectedWorkerZones() {
  return getCheckedValues(els.workerForm, "workerZones");
}

function getCheckedValues(form, name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function setCheckedValues(form, name, values) {
  const selected = new Set(values || []);
  form.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.checked = selected.has(input.value);
  });
}

function getWorkerAvailability() {
  const availability = {};
  els.workerForm.querySelectorAll('input[name="availableDays"]:checked').forEach((input) => {
    const day = input.value;
    const start = els.workerForm.querySelector(`[data-availability-start="${day}"]`).value;
    const end = els.workerForm.querySelector(`[data-availability-end="${day}"]`).value;
    if (start && end && toMinutes(end) > toMinutes(start)) availability[day] = [[start, end]];
  });
  return availability;
}

function setWorkerAvailability(availability) {
  dayNames.forEach((day) => {
    const ranges = availability?.[day] || [];
    const checked = Boolean(ranges.length);
    const start = ranges[0]?.[0] || "08:00";
    const end = ranges[0]?.[1] || "16:00";
    const dayInput = els.workerForm.querySelector(`input[name="availableDays"][value="${day}"]`);
    const startInput = els.workerForm.querySelector(`[data-availability-start="${day}"]`);
    const endInput = els.workerForm.querySelector(`[data-availability-end="${day}"]`);
    if (dayInput) dayInput.checked = checked;
    if (startInput) startInput.value = start;
    if (endInput) endInput.value = end;
  });
}

function updateWeeklyPreview() {
  if (!els.weeklyPreview) return;
  const days = getSelectedServiceDays();
  const durationHours = Number(els.serviceForm.elements.durationHours.value || 0);
  const weeklyHours = days.length * durationHours;
  const visitText = days.length === 1 ? "1 dia" : `${days.length} dies`;
  const recurrenceLabel = recurrenceTypeNames[els.serviceForm.elements.recurrenceType.value] || "Setmanal";
  els.weeklyPreview.textContent = `${formatHours(weeklyHours)} per cicle · ${visitText} · ${recurrenceLabel}`;
}

function isWithinAvailability(worker, service) {
  const ranges = worker.availability[service.day] || [];
  const start = toMinutes(service.start);
  const end = toMinutes(service.end);
  return ranges.some(([rangeStart, rangeEnd]) => start >= toMinutes(rangeStart) && end <= toMinutes(rangeEnd));
}

function overlaps(a, b) {
  return toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end);
}

function overlapsWithBuffer(a, b, bufferMinutes = 0) {
  return (
    toMinutes(a.start) - bufferMinutes < toMinutes(b.end) &&
    toMinutes(b.start) - bufferMinutes < toMinutes(a.end)
  );
}

function dayAssignedHours(workerId, day, assignedServices) {
  return assignedServices
    .filter((service) => service.workerId === workerId && service.day === day)
    .reduce((sum, service) => sum + duration(service), 0);
}

function hasRequiredCapabilities(worker, service) {
  const required = requiredSkillsForService(service);
  return required.every((skill) => {
    if (skill === "vehicle") return worker.skills.includes("vehicle") || ["Cotxe", "Moto", "Furgoneta"].includes(worker.transport);
    return worker.skills.includes(skill);
  });
}

function canDoServiceType(worker, service) {
  return worker.serviceTypes.includes(serviceTypeForService(service));
}

function requiredSkillsForService(service) {
  const text = normalizeText(`${service.requirements} ${service.client}`);
  const requirements = [];
  const rules = [
    ["keys", ["claus", "keys"]],
    ["vehicle", ["vehicle", "cotxe", "furgoneta", "desplacament"]],
    ["windows", ["vidres", "vidre", "finestres"]],
    ["sanitary", ["sanitari", "sanitaria", "clinic", "clinica"]],
    ["stairs", ["escales", "escala", "comunitat"]],
    ["laundry", ["bugaderia", "rentadora", "llençols", "llencols"]],
    ["industrial", ["industrial", "nau", "magatzem"]],
  ];

  rules.forEach(([skill, tokens]) => {
    if (tokens.some((token) => text.includes(token))) requirements.push(skill);
  });

  return [...new Set(requirements)];
}

function serviceTypeForService(service) {
  const text = normalizeText(`${service.client} ${service.requirements}`);
  if (text.includes("clinic")) return "clinics";
  if (text.includes("comunitat") || text.includes("escala")) return "communities";
  if (text.includes("botiga")) return "shops";
  if (text.includes("apartament") || text.includes("pis")) return "apartments";
  if (text.includes("nau") || text.includes("industrial") || text.includes("magatzem")) return "warehouses";
  return "offices";
}

function preferredShiftMatches(worker, service) {
  const start = toMinutes(service.start);
  if (worker.preferredShift === "Indiferent" || !worker.preferredShift) return true;
  if (worker.preferredShift === "Matins") return start < 14 * 60;
  if (worker.preferredShift === "Tardes") return start >= 12 * 60;
  return true;
}

function workerClientHistory(worker, client) {
  return worker.history?.[client] || null;
}

function clientProfileFor(client) {
  return {
    preferredWorkerId: "",
    vetoedWorkers: [],
    preferredShift: "Indiferent",
    qualityLevel: 3,
    continuityPolicy: "flexible",
    changePolicy: "free",
    notes: "",
    ...(state.clientProfiles?.[client] || {}),
  };
}

function clientContinuityScore(history) {
  if (!history) return 0;
  const visits = Number(history.visits) || 0;
  const preferenceFit = Number(history.preferenceFit) || 3;
  return Math.min(30, visits * 2.2) + preferenceFit * 3;
}

function getYearOccurrences(year) {
  const occurrences = [];
  for (let month = 0; month < 12; month += 1) {
    workdaysForMonth(year, month).forEach((date) => {
      occurrences.push(...getOccurrencesForDate(formatDateInput(date)));
    });
  }
  return occurrences;
}

function occurrencesBetween(start, end) {
  const occurrences = [];
  const cursor = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (cursor <= last) {
    occurrences.push(...getOccurrencesForDate(formatDateInput(cursor)));
    cursor.setDate(cursor.getDate() + 1);
  }
  return occurrences;
}

function getOccurrencesForDate(date) {
  const dayName = dayNameForDate(date);
  if (!dayName) return [];
  return orderedServices(state.services.filter((service) => service.day === dayName && serviceOccursOnDate(service, date))).map((service) => {
    const occurrence = { ...withEffectiveAssignment(service), date };
    const worker = getWorker(occurrence.workerId);
    occurrence.paused = isClientOnVacation(occurrence);
    occurrence.workerAbsent = Boolean(worker && isWorkerOnVacation(worker, occurrence));
    occurrence.status = occurrenceStatus(occurrence);
    return occurrence;
  });
}

function serviceOccursOnDate(service, date) {
  if (!isClientActive(service.client)) return false;
  if (!dateInRange(date, service.activeFrom || state.weekStart, service.activeTo || "")) return false;
  const type = service.recurrenceType || "weekly";
  const anchor = service.activeFrom || state.weekStart;
  if (type === "weekly" || type === "seasonal") return true;
  if (type === "biweekly") return weeksBetween(anchor, date) % 2 === 0;
  if (type === "monthly") return weekOfMonth(anchor) === weekOfMonth(date);
  if (type === "annual") return annualWeekKey(anchor) === annualWeekKey(date);
  return true;
}

function weeksBetween(start, end) {
  const startMonday = getMonday(new Date(`${start}T00:00:00`));
  const endMonday = getMonday(new Date(`${end}T00:00:00`));
  return Math.floor((endMonday - startMonday) / (7 * 24 * 60 * 60 * 1000));
}

function weekOfMonth(date) {
  const nativeDate = new Date(`${date}T00:00:00`);
  return Math.ceil(nativeDate.getDate() / 7);
}

function monthDay(date) {
  return String(date).slice(5);
}

function annualWeekKey(date) {
  return monthDay(formatDateInput(getMonday(new Date(`${date}T00:00:00`))));
}

function occurrenceStatus(occurrence) {
  if (occurrence.paused) return "paused";
  if (occurrence.workerAbsent) return "issues";
  if (!occurrence.workerId) return "open";
  return "covered";
}

function matchesCalendarFilters(occurrence) {
  if (state.calendarClient && state.calendarClient !== "all" && occurrence.client !== state.calendarClient) return false;
  if (state.calendarStatus && state.calendarStatus !== "all" && occurrence.status !== state.calendarStatus) return false;
  return true;
}

function groupOccurrencesByDate(occurrences) {
  const groups = new Map();
  occurrences.forEach((occurrence) => {
    const day = groups.get(occurrence.date) || [];
    day.push(occurrence);
    groups.set(occurrence.date, day);
  });
  return groups;
}

function normalizeCalendarSelectedDate(year, occurrences) {
  const selected = state.calendarSelectedDate;
  if (selected && selected.startsWith(`${year}-`)) return selected;
  return firstServiceDateForYear(year, occurrences) || `${year}-01-01`;
}

function firstServiceDateForYear(year, providedOccurrences) {
  const occurrences = providedOccurrences || getYearOccurrences(year);
  return occurrences[0]?.date || "";
}

function workdaysForMonth(year, monthIndex) {
  const dates = [];
  const date = new Date(year, monthIndex, 1);
  while (date.getMonth() === monthIndex) {
    if (dayNameForDate(formatDateInput(date))) dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

function dayNameForDate(date) {
  const nativeDate = typeof date === "string" ? new Date(`${date}T00:00:00`) : date;
  const day = nativeDate.getDay();
  if (day < 1 || day > 5) return "";
  return dayNames[day - 1];
}

function workdayColumn(date) {
  return Math.max(0, date.getDay() - 1);
}

function orderedServices(services) {
  return [...services].sort(
    (a, b) =>
      dayNames.indexOf(a.day) - dayNames.indexOf(b.day) ||
      a.start.localeCompare(b.start) ||
      priorityRank(a.priority) - priorityRank(b.priority),
  );
}

function assignmentOrder(services) {
  return [...services].sort(
    (a, b) =>
      priorityRank(a.priority) - priorityRank(b.priority) ||
      dayNames.indexOf(a.day) - dayNames.indexOf(b.day) ||
      a.start.localeCompare(b.start),
  );
}

function priorityRank(priority) {
  return { Alta: 0, Mitjana: 1, Baixa: 2 }[priority] ?? 3;
}

function duration(service) {
  return (toMinutes(service.end) - toMinutes(service.start)) / 60;
}

function toMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function addHours(start, hoursToAdd) {
  const totalMinutes = toMinutes(start) + Math.round(hoursToAdd * 60);
  const hours = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function formatHours(hours) {
  return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} h`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("ca-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 1 }).format(
    Number(value) || 0,
  );
}

function labelsFor(values, options) {
  const labels = new Map(options.map((option) => [option.id, option.label]));
  return (values || []).map((value) => labels.get(value) || value);
}

function formatDayList(days) {
  const ordered = [...new Set(days)].sort((a, b) => dayNames.indexOf(a) - dayNames.indexOf(b));
  return ordered.join(", ");
}

function dateForDay(dayIndex) {
  const date = new Date(`${state.weekStart}T00:00:00`);
  date.setDate(date.getDate() + dayIndex);
  return new Intl.DateTimeFormat("ca-ES", { day: "2-digit", month: "short" }).format(date);
}

function serviceDateISO(service) {
  if (service.date) return service.date;
  const date = new Date(`${state.weekStart}T00:00:00`);
  date.setDate(date.getDate() + dayNames.indexOf(service.day));
  return formatDateInput(date);
}

function requiredServices() {
  return state.services.filter((service) => isClientActive(service.client) && serviceOccursOnDate(service, serviceDateISO(service)) && !isClientOnVacation(service));
}

function isClientOnVacation(service) {
  const date = serviceDateISO(service);
  return state.vacations.clients.some(
    (vacation) => vacation.client === service.client && dateInRange(date, vacation.start, vacation.end),
  );
}

function isWorkerOnVacation(worker, service) {
  if (!worker) return false;
  const date = serviceDateISO(service);
  return state.vacations.workers.some(
    (vacation) => vacation.workerId === worker.id && dateInRange(date, vacation.start, vacation.end),
  );
}

function dateInRange(date, start, end) {
  return Boolean(date && start && date >= start && (!end || date <= end));
}

function validDateRange(start, end) {
  return Boolean(start && end && end >= start);
}

function validOpenEndedDateRange(start, end) {
  return Boolean(start && (!end || end >= start));
}

function validDateValue(date) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(date)) && !Number.isNaN(new Date(`${date}T00:00:00`).getTime());
}

function formatDateRange(start, end) {
  return `${formatDisplayDate(start)} - ${end ? formatDisplayDate(end) : "Indefinit"}`;
}

function formatDisplayDate(date) {
  return new Intl.DateTimeFormat("ca-ES", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    new Date(`${date}T00:00:00`),
  );
}

function uniqueClients() {
  return [
    ...new Set([
      ...state.services.map((service) => service.client),
      ...Object.keys(state.clientProfiles || {}),
      ...Object.keys(state.clientStatuses || {}),
    ]),
  ].sort((a, b) => a.localeCompare(b));
}

function getClientSummaries() {
  const recurrences = getRecurrenceSummaries();
  return uniqueClients().map((client) => {
    const clientServices = state.services.filter((service) => service.client === client);
    const clientRecurrences = recurrences.filter((recurrence) => recurrence.client === client);
    return {
      name: client,
      status: clientStatus(client),
      serviceCount: clientServices.length,
      weeklyHours: clientRecurrences.reduce((sum, recurrence) => sum + recurrence.weeklyHours, 0),
      zones: [...new Set(clientServices.map((service) => service.zone))].sort((a, b) => a.localeCompare(b)),
      profile: Boolean(state.clientProfiles?.[client]),
    };
  });
}

function clientStatus(client) {
  return state.clientStatuses?.[client] === "Baixa" ? "Baixa" : "Actiu";
}

function isClientActive(client) {
  return clientStatus(client) === "Actiu";
}

function matchesClientStatusFilter(status) {
  if (state.clientStatusFilter === "all") return true;
  if (state.clientStatusFilter === "inactive") return status === "Baixa";
  return status === "Actiu";
}

function renameClientReferences(previousClient, nextClient) {
  if (!previousClient || !nextClient || previousClient === nextClient) return;
  state.services = state.services.map((service) => (service.client === previousClient ? { ...service, client: nextClient } : service));
  if (state.clientProfiles[previousClient] && !state.clientProfiles[nextClient]) state.clientProfiles[nextClient] = state.clientProfiles[previousClient];
  delete state.clientProfiles[previousClient];
  state.clientStatuses[nextClient] = state.clientStatuses[previousClient] || state.clientStatuses[nextClient] || "Actiu";
  delete state.clientStatuses[previousClient];
  state.vacations.clients = state.vacations.clients.map((vacation) =>
    vacation.client === previousClient ? { ...vacation, client: nextClient } : vacation,
  );
  state.serviceLogs = state.serviceLogs.map((log) => (log.client === previousClient ? { ...log, client: nextClient } : log));
  state.workers = state.workers.map((worker) => {
    const history = { ...(worker.history || {}) };
    if (history[previousClient] && !history[nextClient]) history[nextClient] = history[previousClient];
    delete history[previousClient];
    return { ...worker, history };
  });
}

function getMonday(date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const diff = copy.getDate() - day + (day === 0 ? -6 : 1);
  copy.setDate(diff);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function recurrenceKey(service) {
  return service.recurringId || `single-${service.id}`;
}

function getWorker(workerId) {
  return state.workers.find((worker) => worker.id === workerId);
}

function isWorkerActive(worker) {
  return !worker.status || worker.status === "Actiu";
}

function getService(serviceId) {
  return state.services.find((service) => service.id === serviceId);
}

function makeSeedService(id, recurringId, client, zone, day, start, end, priority, requirements, workerId) {
  return {
    id,
    recurringId,
    client,
    zone,
    day,
    start,
    end,
    priority,
    requirements,
    workerId,
    locked: false,
    recurrenceType: "weekly",
    activeFrom: formatDateInput(getMonday(new Date())),
    activeTo: "",
  };
}

function fillSelect(select, options, selectedValue) {
  select.innerHTML = options
    .map((option) => {
      const value = typeof option === "string" ? option : option.value;
      const label = typeof option === "string" ? option : option.label;
      return `<option value="${escapeHtml(value)}" ${String(value) === String(selectedValue) ? "selected" : ""}>${escapeHtml(label)}</option>`;
    })
    .join("");
}

function renderCheckboxOptions(name, options) {
  return options
    .map(
      (option) => `
        <label class="day-check">
          <input name="${name}" type="checkbox" value="${option.id}" />
          ${option.label}
        </label>
      `,
    )
    .join("");
}

function loadState() {
  try {
    const saved = localStorage.getItem(storageKey) || localStorage.getItem(legacyStorageKey);
    const loaded = saved ? JSON.parse(saved) : structuredClone(seedState);
    return normalizeState(loaded);
  } catch {
    return structuredClone(seedState);
  }
}

function normalizeState(rawState) {
  const normalized = {
    weekStart: rawState.weekStart,
    calendarYear: Number(rawState.calendarYear) || new Date().getFullYear(),
    calendarClient: rawState.calendarClient || "all",
    calendarStatus: rawState.calendarStatus || "all",
    calendarSelectedDate: rawState.calendarSelectedDate || formatDateInput(new Date()),
    calendarRangeStart: rawState.calendarRangeStart || formatDateInput(getMonday(new Date())),
    calendarRangeEnd: rawState.calendarRangeEnd || formatDateInput(addDays(getMonday(new Date()), 30)),
    dashboardDate: rawState.dashboardDate || formatDateInput(new Date()),
    filter: rawState.filter || "all",
    plannerSearch: rawState.plannerSearch || "",
    clientStatusFilter: ["active", "inactive", "all"].includes(rawState.clientStatusFilter) ? rawState.clientStatusFilter : "active",
    workerStatusFilter: ["active", "inactive", "all"].includes(rawState.workerStatusFilter) ? rawState.workerStatusFilter : "active",
    selectedClient: rawState.selectedClient || "",
    selectedWorkerId: rawState.selectedWorkerId || "",
    clientStatuses: rawState.clientStatuses && typeof rawState.clientStatuses === "object" && !Array.isArray(rawState.clientStatuses) ? rawState.clientStatuses : {},
    clientProfiles: normalizeClientProfiles(rawState.clientProfiles),
    serviceLogs: Array.isArray(rawState.serviceLogs) ? rawState.serviceLogs : [],
    vacations: normalizeVacations(rawState.vacations),
    workers: Array.isArray(rawState.workers) ? rawState.workers : [],
    services: Array.isArray(rawState.services) ? rawState.services : [],
  };

  const weekStart = new Date(`${normalized.weekStart}T00:00:00`);
  if (!normalized.weekStart || weekStart.getDay() !== 1) normalized.weekStart = formatDateInput(getMonday(new Date()));
  if (!["all", "open", "covered", "issues", "paused"].includes(normalized.calendarStatus)) normalized.calendarStatus = "all";
  if (!validDateValue(normalized.calendarSelectedDate)) normalized.calendarSelectedDate = `${normalized.calendarYear}-01-01`;
  if (!validDateValue(normalized.calendarRangeStart)) normalized.calendarRangeStart = `${normalized.calendarYear}-01-01`;
  if (!validDateValue(normalized.calendarRangeEnd)) normalized.calendarRangeEnd = `${normalized.calendarYear}-12-31`;
  if (!validDateValue(normalized.dashboardDate)) normalized.dashboardDate = formatDateInput(new Date());
  normalized.draftMode = Boolean(normalized.draftMode);
  normalized.developerMode = Boolean(normalized.developerMode);
  normalized.draftAssignments =
    normalized.draftAssignments && typeof normalized.draftAssignments === "object" && !Array.isArray(normalized.draftAssignments)
      ? normalized.draftAssignments
      : {};

  normalized.workers = normalized.workers.map((worker) => ({
    id: worker.id || crypto.randomUUID(),
    name: worker.name || "Sense nom",
    status: workerStatusNames.includes(worker.status) ? worker.status : workerStatusNames[0],
    zones: Array.isArray(worker.zones) ? worker.zones.filter((zone) => zoneNames.includes(zone)) : [],
    homeZone: zoneNames.includes(worker.homeZone) ? worker.homeZone : worker.zones?.[0] || zoneNames[0],
    role: roleNames.includes(worker.role) ? worker.role : roleNames[0],
    contractType: contractTypeNames.includes(worker.contractType) ? worker.contractType : contractTypeNames[0],
    transport: transportNames.includes(worker.transport) ? worker.transport : transportNames[0],
    skills: normalizeOptionIds(worker.skills, skillNames, ["ownProducts"]),
    serviceTypes: normalizeOptionIds(worker.serviceTypes, serviceTypeNames, serviceTypeNames.map((option) => option.id)),
    history: normalizeHistory(worker.history),
    maxHours: Number(worker.maxHours) || 30,
    maxDailyHours: Number(worker.maxDailyHours) || 8,
    acceptsOvertime: Boolean(worker.acceptsOvertime),
    hourlyCost: Number(worker.hourlyCost) || 14,
    preferredShift: preferredShiftNames.includes(worker.preferredShift) ? worker.preferredShift : preferredShiftNames[0],
    travelBuffer: Number(worker.travelBuffer) || 0,
    experience: clampScore(worker.experience || 3),
    quality: clampScore(worker.quality || 4),
    reliability: clampScore(worker.reliability || 4),
    availability: worker.availability && typeof worker.availability === "object" ? worker.availability : {},
  }));

  normalized.services = normalized.services.map((service) => ({
    id: service.id || crypto.randomUUID(),
    recurringId: service.recurringId || `single-${service.id || crypto.randomUUID()}`,
    client: service.client || "Client sense nom",
    zone: zoneNames.includes(service.zone) ? service.zone : zoneNames[0],
    day: dayNames.includes(service.day) ? service.day : dayNames[0],
    start: service.start || "09:00",
    end: service.end || "11:00",
    priority: ["Alta", "Mitjana", "Baixa"].includes(service.priority) ? service.priority : "Mitjana",
    requirements: service.requirements || "",
    recurrenceType: Object.hasOwn(recurrenceTypeNames, service.recurrenceType) ? service.recurrenceType : "weekly",
    activeFrom: validDateValue(service.activeFrom) ? service.activeFrom : normalized.weekStart,
    activeTo: validDateValue(service.activeTo) ? service.activeTo : "",
    workerId: normalized.workers.some((worker) => worker.id === service.workerId) ? service.workerId : "",
    locked: Boolean(service.locked),
  }));

  normalized.draftAssignments = Object.fromEntries(
    normalized.services.map((service) => {
      const draftWorkerId = normalized.draftAssignments[service.id];
      return [service.id, normalized.workers.some((worker) => worker.id === draftWorkerId) ? draftWorkerId : service.workerId || ""];
    }),
  );

  const knownClients = new Set([
    ...normalized.services.map((service) => service.client),
    ...Object.keys(normalized.clientProfiles),
    ...Object.keys(normalized.clientStatuses),
  ]);
  normalized.clientStatuses = Object.fromEntries(
    [...knownClients].map((client) => [client, normalized.clientStatuses[client] === "Baixa" ? "Baixa" : "Actiu"]),
  );
  if (normalized.selectedClient && !knownClients.has(normalized.selectedClient)) normalized.selectedClient = "";
  if (normalized.selectedWorkerId && !normalized.workers.some((worker) => worker.id === normalized.selectedWorkerId)) normalized.selectedWorkerId = "";

  return normalized;
}

function normalizeOptionIds(values, options, fallback) {
  const allowed = new Set(options.map((option) => option.id));
  const normalized = Array.isArray(values) ? values.filter((value) => allowed.has(value)) : [];
  return normalized.length ? normalized : fallback;
}

function normalizeHistory(history) {
  if (!history || typeof history !== "object" || Array.isArray(history)) return {};
  return Object.fromEntries(
    Object.entries(history)
      .filter(([client]) => client)
      .map(([client, record]) => [
        client,
        {
          visits: Math.max(0, Number(record?.visits) || 0),
          lastVisit: record?.lastVisit || "",
          preferenceFit: clampScore(record?.preferenceFit || 3),
        },
      ]),
  );
}

function normalizeClientProfiles(profiles) {
  if (!profiles || typeof profiles !== "object" || Array.isArray(profiles)) return {};
  return Object.fromEntries(
    Object.entries(profiles)
      .filter(([client]) => client)
      .map(([client, profile]) => [
        client,
        {
          preferredWorkerId: profile?.preferredWorkerId || "",
          vetoedWorkers: Array.isArray(profile?.vetoedWorkers) ? profile.vetoedWorkers : [],
          preferredShift: preferredShiftNames.includes(profile?.preferredShift) ? profile.preferredShift : "Indiferent",
          qualityLevel: clampScore(profile?.qualityLevel || 3),
          continuityPolicy: ["flexible", "preferSame", "requireKnown"].includes(profile?.continuityPolicy) ? profile.continuityPolicy : "flexible",
          changePolicy: ["free", "review", "strict"].includes(profile?.changePolicy) ? profile.changePolicy : "free",
          notes: profile?.notes || "",
        },
      ]),
  );
}

function normalizeVacations(vacations) {
  return {
    clients: Array.isArray(vacations?.clients)
      ? vacations.clients
          .filter((vacation) => vacation.client && validDateRange(vacation.start, vacation.end))
          .map((vacation) => ({
            id: vacation.id || crypto.randomUUID(),
            client: vacation.client,
            start: vacation.start,
            end: vacation.end,
            reason: vacation.reason || "Vacances",
          }))
      : [],
    workers: Array.isArray(vacations?.workers)
      ? vacations.workers
          .filter((vacation) => vacation.workerId && validOpenEndedDateRange(vacation.start, vacation.end || ""))
          .map((vacation) => ({
            id: vacation.id || crypto.randomUUID(),
            workerId: vacation.workerId,
            start: vacation.start,
            end: vacation.indefinite ? "" : vacation.end || "",
            indefinite: Boolean(vacation.indefinite || !vacation.end),
            reason: vacation.reason || "Vacances",
          }))
      : [],
  };
}

function clampScore(value) {
  return Math.max(1, Math.min(5, Number(value) || 3));
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function showToast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("is-visible"), 2800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
