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
  once: "Puntual",
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
  serviceAssignmentOverrides: {},
  dashboardDate: formatDateInput(new Date()),
  draftMode: false,
  developerMode: false,
  sidebarCollapsed: false,
  draftAssignments: {},
  clientStatusFilter: "active",
  workerStatusFilter: "active",
  userRole: "admin",
  userWorkerId: "",
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
  sidebarToggle: document.querySelector("#sidebarToggle"),
  weekStart: document.querySelector("#weekStart"),
  userRole: document.querySelector("#userRole"),
  userWorker: document.querySelector("#userWorker"),
  assignmentScore: document.querySelector("#assignmentScore"),
  draftMode: document.querySelector("#draftMode"),
  developerMode: document.querySelector("#developerMode"),
  confirmDraft: document.querySelector("#confirmDraft"),
  discardDraft: document.querySelector("#discardDraft"),
  draftScorePreview: document.querySelector("#draftScorePreview"),
  draftComparisonPanel: document.querySelector("#draftComparisonPanel"),
  draftComparisonCount: document.querySelector("#draftComparisonCount"),
  draftComparisonList: document.querySelector("#draftComparisonList"),
  coordinationCenter: document.querySelector("#coordinationCenter"),
  coordinationMode: document.querySelector("#coordinationMode"),
  coordinationSummary: document.querySelector("#coordinationSummary"),
  coordinationAssignments: document.querySelector("#coordinationAssignments"),
  metrics: document.querySelector("#metrics"),
  dashboardDate: document.querySelector("#dashboardDate"),
  dashboardToday: document.querySelector("#dashboardToday"),
  dashboardNextServiceDay: document.querySelector("#dashboardNextServiceDay"),
  quickServiceOpen: document.querySelector("#quickServiceOpen"),
  dashboardDaySummary: document.querySelector("#dashboardDaySummary"),
  dashboardDayCount: document.querySelector("#dashboardDayCount"),
  dashboardDayPlan: document.querySelector("#dashboardDayPlan"),
  riskNavBadge: document.querySelector("#riskNavBadge"),
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
  calendarOptimizeYear: document.querySelector("#calendarOptimizeYear"),
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
  quickServiceModal: document.querySelector("#quickServiceModal"),
  quickServiceForm: document.querySelector("#quickServiceForm"),
  quickServiceClose: document.querySelector("#quickServiceClose"),
  quickServiceCancel: document.querySelector("#quickServiceCancel"),
  quickServiceClientOptions: document.querySelector("#quickServiceClientOptions"),
  quickServiceDays: document.querySelector("#quickServiceDays"),
  quickServiceRecommendations: document.querySelector("#quickServiceRecommendations"),
  serviceForm: document.querySelector("#serviceForm"),
  serviceFormTitle: document.querySelector("#serviceFormTitle"),
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
  fillAccessControls();
  els.userRole.value = state.userRole;
  els.userWorker.value = state.userWorkerId || firstWorkerId();
  els.draftMode.checked = Boolean(state.draftMode);
  els.developerMode.checked = Boolean(state.developerMode);
  if (els.dashboardDate) els.dashboardDate.value = state.dashboardDate;
  applySidebarState();
  els.serviceForm.elements.activeFrom.value = state.weekStart;
  if (els.plannerSearch) els.plannerSearch.value = state.plannerSearch || "";
  fillCalendarControls();
  fillZoneControls();
  fillDayControls();
  fillQuickServiceControls();
  fillWorkerParameterControls();
  fillWorkerAvailabilityControls();
  fillClientProfileControls();
  bindEvents();
  updateWeeklyPreview();
  const initialView = ["dashboard", "planner", "calendar", "risks", "clients", "workers", "vacations", "options"].includes(location.hash.slice(1))
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

  els.userRole.addEventListener("change", () => {
    state.userRole = els.userRole.value === "worker" ? "worker" : "admin";
    if (state.userRole === "worker" && !state.userWorkerId) state.userWorkerId = firstWorkerId();
    persist();
    render();
  });

  els.userWorker.addEventListener("change", () => {
    state.userWorkerId = els.userWorker.value;
    persist();
    render();
  });

  els.sidebarToggle?.addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    applySidebarState();
    persist();
  });

  els.plannerPrevWeek.addEventListener("click", () => shiftPlannerWeek(-7));
  els.plannerCurrentWeek.addEventListener("click", () => setPlannerWeek(formatDateInput(getMonday(new Date()))));
  els.plannerNextWeek.addEventListener("click", () => shiftPlannerWeek(7));

  els.dashboardDate?.addEventListener("change", () => {
    state.dashboardDate = els.dashboardDate.value;
    persist();
    renderDashboardDayPlan();
  });

  els.dashboardToday?.addEventListener("click", () => {
    state.dashboardDate = formatDateInput(new Date());
    if (els.dashboardDate) els.dashboardDate.value = state.dashboardDate;
    persist();
    renderDashboardDayPlan();
  });

  els.dashboardNextServiceDay?.addEventListener("click", () => {
    const currentDate = state.dashboardDate || formatDateInput(new Date());
    const nextDate = nextServiceDateFrom(addDays(new Date(`${currentDate}T00:00:00`), 1));
    if (!nextDate) {
      showToast("No he trobat cap servei proper.");
      return;
    }
    state.dashboardDate = nextDate;
    if (els.dashboardDate) els.dashboardDate.value = state.dashboardDate;
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

  els.calendarOptimizeYear.addEventListener("click", optimizeCalendarYear);

  els.draftMode.addEventListener("change", () => {
    state.draftMode = els.draftMode.checked;
    if (state.draftMode) {
      ensureDraftAssignments();
      showToast("Mode assignació activat. Les assignacions proposades no canviaran la planificació confirmada fins que les apliquis.");
    } else {
      state.draftAssignments = {};
      showToast("Mode assignació desactivat. Es mantenen les assignacions confirmades.");
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

  els.quickServiceOpen.addEventListener("click", openQuickServiceModal);
  els.quickServiceClose.addEventListener("click", closeQuickServiceModal);
  els.quickServiceCancel.addEventListener("click", closeQuickServiceModal);
  els.quickServiceForm.addEventListener("submit", addQuickService);
  els.quickServiceForm.addEventListener("input", updateQuickServiceRecommendations);
  els.quickServiceForm.addEventListener("change", () => {
    syncQuickServiceControls();
    updateQuickServiceRecommendations();
  });

  document.querySelector("#clearAssignments").addEventListener("click", () => {
    if (state.draftMode) {
      ensureDraftAssignments();
      assignmentUnitsFromServices(state.services).forEach((unit) => {
        if (!unit.locked) state.draftAssignments[unit.id] = "";
      });
    } else {
      state.services.forEach((service) => {
        if (!service.locked) clearServiceAssignments(service);
      });
    }
    persist();
    render();
    showToast(state.draftMode ? "Propostes d'assignació netejades." : "Assignacions netejades.");
  });

  document.querySelector("#resetData").addEventListener("click", () => {
    state = structuredClone(seedState);
    state.weekStart = formatDateInput(getMonday(new Date()));
    state.calendarYear = new Date().getFullYear();
    state.calendarSelectedDate = formatDateInput(new Date());
    state.draftMode = false;
    state.developerMode = false;
    state.draftAssignments = {};
    state.serviceAssignmentOverrides = {};
    state.clientStatusFilter = "active";
    state.workerStatusFilter = "active";
    state.userRole = "admin";
    state.userWorkerId = "";
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
  els.serviceForm.addEventListener("change", syncServiceModeControls);
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
  els.quickServiceModal.addEventListener("click", (event) => {
    if (event.target === els.quickServiceModal) closeQuickServiceModal();
  });
  els.calendarDayModal.addEventListener("click", (event) => {
    if (event.target === els.calendarDayModal) closeCalendarDayModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.calendarDayModal.hidden) closeCalendarDayModal();
    if (event.key === "Escape" && !els.autoAssignModal.hidden) discardAutoAssignmentPreview();
    if (event.key === "Escape" && !els.quickServiceModal.hidden) closeQuickServiceModal();
  });
}

function switchView(viewId, updateHash = true) {
  if (isWorkerSession() && ["risks", "clients", "workers", "vacations", "options"].includes(viewId)) viewId = "dashboard";
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
    risks: "Riscos operatius",
    clients: "Clients i serveis",
    workers: "Treballadors i disponibilitat",
    vacations: "Calendari de vacances",
    options: "Opcions",
  };
  els.viewTitle.textContent = titles[viewId];
  renderAssignmentModeContext();
  if (updateHash) {
    history.replaceState(null, "", `#${viewId}`);
    window.scrollTo(0, 0);
  }
}

function render() {
  fillAccessControls();
  fillQuickServiceControls();
  applySidebarState();
  applyAccessMode();
  const analysis = analyzeSchedule();
  renderAssignmentControls();
  renderFilterButtons();
  renderAssignmentModeContext();
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
  if (isWorkerSession()) {
    const worker = getWorker(state.userWorkerId);
    els.assignmentScore.textContent = worker ? `Sessio: ${worker.name}` : "Sessio treballador";
    els.draftScorePreview.textContent = "Vista limitada als serveis assignats a aquest treballador.";
    document.querySelector("#draftModeControl")?.classList.add("is-hidden");
    document.querySelector("#autoAssign")?.classList.add("is-hidden");
    els.confirmDraft.classList.add("is-hidden");
    els.discardDraft.classList.add("is-hidden");
    document.querySelector("#clearAssignments")?.classList.add("is-hidden");
    return;
  }
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
      ? `Vista desenvolupador: mode assignació ${Math.round(current.score)} punts · confirmat ${Math.round(confirmed.score)} punts · diferencia ${delta >= 0 ? "+" : ""}${delta} · ${changes} canvis pendents.`
      : `Vista desenvolupador: assignacio confirmada ${Math.round(confirmed.score)} punts · ${confirmed.label}.`;
  } else if (state.draftMode) {
    els.draftScorePreview.textContent = changes
      ? `Mode assignació actiu: ${changes} canvis d'assignació pendents. Pots aplicar-los o descartar-los sense tocar clients ni treballadors.`
      : "Mode assignació actiu: prova reassignacions o optimitza la setmana sense canviar encara la planificació confirmada.";
  } else {
    els.draftScorePreview.textContent =
      "El mode assignació només prova assignacions de serveis. Les edicions de clients i treballadors es guarden o descarten des dels seus formularis.";
  }

  renderDraftComparison();
  renderAssignmentModeContext();
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
    : `<p class="empty-state">No hi ha canvis pendents en el mode assignació.</p>`;
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
        reason: draftWorker ? mainScoreReason(draftWorker, service) : "Servei pendent en el mode assignació",
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
  els.coordinationCenter?.classList.toggle("is-hidden", !state.draftMode || !changes.length);

  els.coordinationMode.textContent = state.draftMode ? "Mode assignació actiu" : "Planificació confirmada";
  els.coordinationMode.className = `pill ${state.draftMode ? "warning" : "success"}`;
  els.coordinationSummary.innerHTML = `
    <div class="coordination-card">
      <strong>${Math.round(confirmed.score)}</strong>
      <span class="meta">Punts assignació actual · ${confirmed.label}</span>
    </div>
    <div class="coordination-card">
      <strong>${Math.round(proposal.score)}</strong>
      <span class="meta">${state.draftMode ? "Punts assignació provisional" : "Sense mode assignació actiu"} · ${proposal.label}</span>
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

function renderAssignmentModeContext() {
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
    ["Hores pendents", formatHours(analysis.openHours), `${analysis.openServices} serveis sense assignar`],
    ["Riscos", String(analysis.conflicts.length), "Disponibilitat, baixes o solapaments"],
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
  els.riskNavBadge.textContent = String(dashboard.followUps.length);
  els.riskNavBadge.classList.toggle("is-hidden", !dashboard.followUps.length);
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
    : `<p class="empty-state">Sense riscos rellevants ara mateix.</p>`;

  bindBestButtons();
  bindDashboardNavigation();
}

function renderDashboardDayPlan() {
  const date = formatDateInput(new Date());
  state.dashboardDate = date;
  if (els.dashboardDate && els.dashboardDate.value !== date) els.dashboardDate.value = date;
  const occurrences = getOccurrencesForDate(date);
  const active = occurrences.filter((service) => !service.paused);
  const covered = active.filter((service) => service.workerId && !service.workerAbsent);
  const open = active.filter((service) => !service.workerId);
  const issues = active.filter((service) => service.workerAbsent);
  const totalHours = active.reduce((sum, service) => sum + duration(service), 0);

  els.dashboardDaySummary.textContent = `${formatDisplayDate(date)} · ${formatHours(totalHours)} actives · ${covered.length} cobertes · ${open.length} pendents · ${issues.length} conflictes`;
  els.dashboardDayCount.textContent = `${occurrences.length} serveis`;
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
  const workerLabel = worker ? worker.name : "Sense treballador";
  const workerMeta = service.workerAbsent ? "Absencia aquest dia" : worker ? "Cobreix aquest servei" : "Pendent d'assignar";

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
        <div class="daily-worker ${worker ? "is-covered" : "is-open"}">
          <span>${escapeHtml(workerLabel)}</span>
          <small>${escapeHtml(workerMeta)}</small>
        </div>
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
      </div>
      ${renderScoreBreakdown(service, 2)}
    </article>
  `;
}

function bindDashboardDayActions(date) {
  document.querySelectorAll("[data-dashboard-assign-service]").forEach((select) => {
    select.addEventListener("change", () => {
      const service = getAssignmentUnit(select.dataset.dashboardAssignService, select.dataset.dashboardDate);
      const occurrence = { ...service, date: select.dataset.dashboardDate, workerId: effectiveWorkerId(service) };
      const worker = getWorker(select.value);
      if (worker && !workerEligibilityForService(occurrence).some((candidate) => candidate.worker.id === worker.id && candidate.result.valid)) {
        showToast("Aquest treballador no compleix els requisits del servei.");
        renderDashboardDayPlan();
        return;
      }
      setOccurrenceAssignment(service, select.dataset.dashboardDate, select.value);
      persist();
      render();
      showToast("Assignacio actualitzada nomes per aquest dia.");
    });
  });

}

function openQuickServiceModal() {
  const baseDate = formatDateInput(new Date());
  els.quickServiceForm.reset();
  els.quickServiceForm.elements.serviceMode.value = "single";
  els.quickServiceForm.elements.singleDate.value = baseDate;
  els.quickServiceForm.elements.activeFrom.value = baseDate;
  els.quickServiceForm.elements.activeTo.value = formatDateInput(addDays(new Date(`${baseDate}T00:00:00`), 30));
  els.quickServiceForm.elements.start.value = "09:00";
  els.quickServiceForm.elements.durationHours.value = "2";
  els.quickServiceForm.elements.priority.value = "Mitjana";
  els.quickServiceForm.elements.assignmentMode.value = "suggest";
  setCheckedValues(els.quickServiceForm, "days", [dayNameForDate(baseDate)].filter(Boolean));
  syncQuickServiceControls();
  updateQuickServiceRecommendations();
  els.quickServiceModal.hidden = false;
  els.quickServiceModal.setAttribute("aria-hidden", "false");
  els.quickServiceForm.elements.client.focus();
}

function closeQuickServiceModal() {
  els.quickServiceModal.hidden = true;
  els.quickServiceModal.setAttribute("aria-hidden", "true");
}

function syncQuickServiceControls() {
  const isSingle = els.quickServiceForm.elements.serviceMode.value === "single";
  const isFixed = els.quickServiceForm.elements.assignmentMode.value === "fixed";
  els.quickServiceForm.querySelectorAll("[data-quick-single-field]").forEach((field) => field.classList.toggle("is-hidden", !isSingle));
  els.quickServiceForm.querySelectorAll("[data-quick-recurring-field]").forEach((field) => field.classList.toggle("is-hidden", isSingle));
  els.quickServiceForm.querySelector("[data-quick-fixed-worker]")?.classList.toggle("is-hidden", !isFixed);
}

function addQuickService(event) {
  event.preventDefault();
  const draft = buildQuickServiceDraft(true);
  if (!draft) return;

  state.services.push(...draft.services);
  if (!state.clientStatuses[draft.clientName]) state.clientStatuses[draft.clientName] = "Actiu";

  let suggestedAssignments = 0;
  if (draft.assignmentMode === "suggest") {
    draft.occurrences.forEach((occurrence) => {
      const candidate = bestCandidateForQuickOccurrence(occurrence);
      const service = getService(occurrence.id);
      if (service && candidate) {
        setOccurrenceAssignment(service, occurrence.date, candidate.worker.id);
        suggestedAssignments += 1;
      }
    });
  }

  state.selectedClient = draft.clientName;
  state.dashboardDate = draft.occurrences[0]?.date || state.dashboardDate;
  persist();
  closeQuickServiceModal();
  render();
  showToast(
    draft.assignmentMode === "suggest"
      ? `Servei creat. ${suggestedAssignments}/${draft.occurrences.length} serveis assignats per puntuacio.`
      : "Servei creat.",
  );
}

function buildQuickServiceDraft(showErrors = false) {
  const data = Object.fromEntries(new FormData(els.quickServiceForm));
  const clientName = data.client.trim();
  const isSingle = data.serviceMode === "single";
  const assignmentMode = ["suggest", "fixed", "none"].includes(data.assignmentMode) ? data.assignmentMode : "suggest";
  const durationHours = Number(data.durationHours);
  const start = data.start;
  const activeFrom = isSingle ? data.singleDate : data.activeFrom;
  const activeTo = isSingle ? data.singleDate : data.activeTo;
  const selectedDays = isSingle ? [dayNameForDate(data.singleDate)].filter(Boolean) : getCheckedValues(els.quickServiceForm, "days");
  const fail = (message) => {
    if (showErrors) showToast(message);
    return null;
  };

  if (!clientName) return fail("Introdueix el client del servei.");
  if (!durationHours || durationHours <= 0) return fail("Les hores han de ser superiors a 0.");
  if (!start) return fail("Indica l'hora d'inici.");
  if (!validDateValue(activeFrom) || !validDateValue(activeTo) || activeTo < activeFrom) return fail("Revisa les dates del servei.");
  if (isSingle && !selectedDays.length) return fail("Els serveis puntuals nomes es poden programar de dilluns a divendres.");
  if (!isSingle && !selectedDays.length) return fail("Selecciona com a minim un dia recurrent.");
  if (assignmentMode === "fixed" && !data.workerId) return fail("Selecciona el treballador fix.");

  const recurringId = crypto.randomUUID();
  const end = addHours(start, durationHours);
  const allowInactiveClient = clientStatus(clientName) === "Baixa";
  const services = selectedDays.map((day) => ({
    id: crypto.randomUUID(),
    client: clientName,
    zone: data.zone,
    day,
    start,
    end,
    priority: data.priority,
    requirements: data.requirements.trim(),
    recurrenceType: isSingle ? "once" : "weekly",
    activeFrom,
    activeTo,
    recurringId,
    workerId: assignmentMode === "fixed" ? data.workerId : "",
    segments: [makeServiceSegment(day, start, end, assignmentMode === "fixed" ? data.workerId : "")],
    locked: assignmentMode === "fixed",
    allowInactiveClient,
  }));
  const occurrences = occurrencesForDraftServices(services, activeFrom, activeTo);

  if (!occurrences.length) return fail("No hi ha cap servei dins aquest rang de dates.");
  if (assignmentMode === "fixed") {
    const invalid = occurrences.some(
      (occurrence) =>
        !workerEligibilityForService(occurrence).some((candidate) => candidate.worker.id === data.workerId && candidate.result.valid),
    );
    if (invalid) return fail("El treballador fix no compleix els requisits o la disponibilitat en algun servei.");
  }

  return { services, occurrences, assignmentMode, clientName };
}

function occurrencesForDraftServices(services, start, end) {
  const occurrences = [];
  const cursor = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (cursor <= last) {
    const date = formatDateInput(cursor);
    const day = dayNameForDate(date);
    services.forEach((service) => {
      if (service.day === day && serviceOccursOnDate(service, date)) {
        occurrences.push({ ...service, date, paused: false, workerAbsent: false, status: service.workerId ? "covered" : "open" });
      }
    });
    cursor.setDate(cursor.getDate() + 1);
  }
  return occurrences;
}

function bestCandidateForQuickOccurrence(occurrence) {
  return workerEligibilityForService(occurrence)
    .filter((candidate) => candidate.result.valid)
    .sort((a, b) => b.result.score - a.result.score || a.worker.name.localeCompare(b.worker.name))[0];
}

function updateQuickServiceRecommendations() {
  if (!els.quickServiceRecommendations) return;
  const draft = buildQuickServiceDraft(false);
  if (!draft) {
    els.quickServiceRecommendations.innerHTML = `<p class="empty-state compact">Completa les dades per veure candidats.</p>`;
    return;
  }
  const aggregate = new Map();
  draft.occurrences.forEach((occurrence) => {
    workerEligibilityForService(occurrence)
      .filter((candidate) => candidate.result.valid)
      .forEach((candidate) => {
        const item = aggregate.get(candidate.worker.id) || { worker: candidate.worker, score: 0, count: 0 };
        item.score += candidate.result.score;
        item.count += 1;
        aggregate.set(candidate.worker.id, item);
      });
  });
  const recommendations = [...aggregate.values()]
    .map((item) => ({ ...item, average: item.score / item.count }))
    .sort((a, b) => b.average - a.average || b.count - a.count || a.worker.name.localeCompare(b.worker.name))
    .slice(0, 3);

  const assignedBySuggestion = draft.occurrences.filter((occurrence) => bestCandidateForQuickOccurrence(occurrence)).length;
  els.quickServiceRecommendations.innerHTML = recommendations.length
    ? `
      <div class="form-summary compact-summary">
        ${draft.occurrences.length} serveis previstos · ${assignedBySuggestion}/${draft.occurrences.length} amb candidat valid
      </div>
      <div class="quick-candidate-list">
        ${recommendations
          .map(
            (item) => `
              <span class="pill">${escapeHtml(item.worker.name)} · ${Math.round(item.average)} punts · ${item.count}/${draft.occurrences.length}</span>
            `,
          )
          .join("")}
      </div>
    `
    : `<p class="empty-state compact">No hi ha cap treballador valid per aquestes dates i requisits.</p>`;
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
      title: `${client}: ${services.length} serveis pendents`,
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
      title: `${futureOpen.length} serveis futurs sense cobrir`,
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
  const weekDates = dayNames.map((_, index) => formatDateInput(addDays(new Date(`${state.weekStart}T00:00:00`), index)));
  const filteredServices = orderedServices(weekDates.flatMap(getOccurrencesForDate)).filter((service) => {
    if (!serviceClientAvailable(service)) return false;
    if (!serviceVisibleToCurrentUser(service)) return false;
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
      const service = getAssignmentUnit(select.dataset.assignService);
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
      const service = getAssignmentUnit(button.dataset.clearService);
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
  persist();
  render();
}

function renderShiftCard(service, analysis) {
  const issues = analysis.byService.get(service.id) || [];
  const paused = isClientOnVacation(service);
  const canManageAssignments = !isWorkerSession();
  const recommendation = canManageAssignments ? bestCandidateForService(service.id) : null;
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
          : canManageAssignments
            ? `<select data-assign-service="${service.id}" aria-label="Assignar treballador a ${escapeHtml(service.client)}">
              <option value="">Sense assignar</option>
              ${workerOptions}
            </select>`
            : `<p class="form-summary compact-summary">${selectedWorker ? `Assignat a ${escapeHtml(selectedWorker.name)}` : "Sense assignar"}</p>`
      }
      <div class="mini-actions ${canManageAssignments ? "" : "is-hidden"}">
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
  els.calendarServiceCount.textContent = `${visibleOccurrences.length} serveis`;
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
    ["Cobertes", formatHours(covered.reduce((sum, item) => sum + duration(item), 0)), `${covered.length} serveis amb treballador`],
    ["Pendents", formatHours(open.reduce((sum, item) => sum + duration(item), 0)), `${open.length} serveis sense assignar`],
    ["Punts anuals", String(Math.round(rangeScore.score)), `${rangeScore.assigned}/${active.length} serveis puntuats`],
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
          <p class="meta">${formatHours(activeHours)} · ${monthOccurrences.length} serveis</p>
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
  els.calendarModalSubtitle.textContent = `${occurrences.length} serveis · ${formatHours(active.reduce((sum, item) => sum + duration(item), 0))} actius`;
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
  const canManageAssignments = !isWorkerSession();
  const recommendation = canManageAssignments && !service.paused && !worker ? bestCandidateForOccurrence(service) : null;
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
          compact && canManageAssignments && !service.paused
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
      const service = getAssignmentUnit(select.dataset.calendarAssignService, date);
      const worker = getWorker(select.value);
      const occurrence = { ...service, date, workerId: effectiveWorkerId(service) };
      if (worker && !workerEligibilityForService(occurrence).some((candidate) => candidate.worker.id === worker.id && candidate.result.valid)) {
        showToast("Aquest treballador no compleix els requisits del servei.");
        openCalendarDayModal(date);
        return;
      }
      setOccurrenceAssignment(service, date, select.value);
      persist();
      render();
      openCalendarDayModal(date);
      showToast("Assignacio actualitzada nomes per aquest dia.");
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

function recurrenceScheduleText(recurrence) {
  if (recurrence.recurrenceType === "once") return recurrence.activeFrom ? formatDisplayDate(recurrence.activeFrom) : "Data puntual";
  return formatDayList(recurrence.days);
}

function recurrenceHoursText(recurrence) {
  if (recurrence.recurrenceType === "once") return formatHours(recurrence.hoursPerVisit);
  return `${formatHours(recurrence.weeklyHours)}/setmana`;
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
              <div class="meta">${escapeHtml(recurrenceScheduleText(recurrence))} · ${recurrence.start}-${recurrence.end} · ${formatHours(recurrence.hoursPerVisit)} per servei</div>
              <div><span class="pill">${recurrenceHoursText(recurrence)}</span></div>
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
  const contact = [profile.contactName, profile.contactPhone, profile.contactEmail].filter(Boolean).join(" · ") || "Sense contacte";
  const location = [profile.address, profile.postalCode, profile.city].filter(Boolean).join(" · ") || "Sense ubicacio";
  return `
    <div class="table-row">
      <div>
        <strong>${escapeHtml(client)}</strong>
        <p class="meta">${escapeHtml(profile.taxId || "Sense NIF/CIF")} · ${escapeHtml(contact)}</p>
      </div>
      <div class="meta">${escapeHtml(location)} · Preferit: ${escapeHtml(preferred)} · Vetats: ${escapeHtml(vetoed)} · ${escapeHtml(continuity)}${profile.notes ? ` · ${escapeHtml(profile.notes)}` : ""}</div>
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
              <div class="meta">${service.recurrenceType === "once" ? formatDisplayDate(service.activeFrom) : service.day} · ${service.start}-${service.end} · ${formatHours(duration(service))}</div>
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
  els.clientProfileForm.elements.taxId.value = profile.taxId || "";
  els.clientProfileForm.elements.contactName.value = profile.contactName || "";
  els.clientProfileForm.elements.contactPhone.value = profile.contactPhone || "";
  els.clientProfileForm.elements.contactEmail.value = profile.contactEmail || "";
  els.clientProfileForm.elements.address.value = profile.address || "";
  els.clientProfileForm.elements.city.value = profile.city || "";
  els.clientProfileForm.elements.postalCode.value = profile.postalCode || "";
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
  els.serviceForm.elements.serviceMode.value = "recurring";
  els.serviceForm.elements.start.value = "09:00";
  els.serviceForm.elements.durationHours.value = "2";
  els.serviceForm.elements.activeFrom.value = state.weekStart;
  els.serviceForm.elements.singleDate.value = formatDateInput(new Date());
  setCheckedValues(els.serviceForm, "days", []);
  syncServiceModeControls();
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
  fields.serviceMode.value = recurrence.recurrenceType === "once" ? "single" : "recurring";
  fields.client.value = recurrence.client;
  fields.zone.value = recurrence.zone;
  fields.recurrenceType.value = recurrence.recurrenceType || "weekly";
  fields.activeFrom.value = recurrence.activeFrom || state.weekStart;
  fields.activeTo.value = recurrence.activeTo || "";
  fields.singleDate.value = recurrence.activeFrom || formatDateInput(new Date());
  fields.start.value = recurrence.start;
  fields.durationHours.value = recurrence.hoursPerVisit;
  fields.priority.value = recurrence.priority;
  fields.requirements.value = recurrence.requirements || "";
  setCheckedValues(els.serviceForm, "days", recurrence.days);
  syncServiceModeControls();
}

function setClientStatus(client, status) {
  if (!client) return;
  state.clientStatuses[client] = status;
  if (status === "Baixa") {
    state.services.forEach((service) => {
      if (service.client === client) clearServiceAssignments(service);
    });
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
              <div class="meta">${escapeHtml(recurrenceScheduleText(recurrence))} · ${recurrence.start}-${recurrence.end} · ${formatHours(recurrence.hoursPerVisit)} per servei</div>
              <div><span class="pill">${recurrenceHoursText(recurrence)}</span></div>
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
              <div class="meta">${service.recurrenceType === "once" ? formatDisplayDate(service.activeFrom) : service.day} · ${service.start}-${service.end} · ${formatHours(duration(service))}</div>
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
                <button class="icon-button" data-preview-leave-worker="${worker.id}" type="button" title="Crear una proposta de reassignacio per baixa">Provar baixa</button>
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
      state.services.forEach((service) => {
        if (serviceHasWorkerAssignment(service, button.dataset.deleteWorker)) clearServiceAssignments(service, button.dataset.deleteWorker);
      });
      state.workers = state.workers.filter((worker) => worker.id !== button.dataset.deleteWorker);
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

  document.querySelectorAll("[data-preview-leave-worker]").forEach((button) => {
    button.addEventListener("click", () => previewWorkerLeave(button.dataset.previewLeaveWorker));
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
  const isSingle = data.serviceMode === "single";
  const singleDayName = isSingle ? dayNameForDate(data.singleDate) : "";
  const days = isSingle ? [singleDayName].filter(Boolean) : getSelectedServiceDays();
  const durationHours = Number(data.durationHours);
  const recurrenceType = isSingle ? "once" : Object.hasOwn(recurrenceTypeNames, data.recurrenceType) && data.recurrenceType !== "once" ? data.recurrenceType : "weekly";
  const activeFrom = isSingle ? data.singleDate : data.activeFrom || state.weekStart;
  const activeTo = isSingle ? data.singleDate : data.activeTo || "";
  const editingRecurrence = event.currentTarget.dataset.editingRecurrence;
  const originalClient = event.currentTarget.dataset.editingClient;
  const clientName = data.client.trim();

  if (!clientName) return showToast("Introdueix el nom del client.");
  if (isSingle && !validDateValue(data.singleDate)) return showToast("Selecciona una data valida per al servei puntual.");
  if (isSingle && !singleDayName) return showToast("Els serveis puntuals nomes es poden programar de dilluns a divendres.");
  if (!isSingle && !days.length) return showToast("Selecciona com a minim un dia recurrent.");
  if (!durationHours || durationHours <= 0) return showToast("Les hores per servei han de ser superiors a 0.");
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
    segments: [makeServiceSegment(day, data.start, end)],
    locked: false,
  }));

  if (editingRecurrence) {
    if (originalClient && originalClient !== clientName) renameClientReferences(originalClient, clientName);
    state.services = state.services.filter((service) => recurrenceKey(service) !== editingRecurrence);
    state.services.push(...newServices);
    removeDraftAssignmentsForMissingServices();
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
  event.currentTarget.elements.serviceMode.value = "recurring";
  event.currentTarget.elements.start.value = "09:00";
  event.currentTarget.elements.durationHours.value = "2";
  event.currentTarget.elements.activeFrom.value = state.weekStart;
  event.currentTarget.elements.singleDate.value = formatDateInput(new Date());
  syncServiceModeControls();
  updateWeeklyPreview();
  persist();
  render();
  showToast(`${clientName} afegit: ${recurrenceTypeNames[recurrenceType]} - ${formatHours(days.length * durationHours)}${isSingle ? " puntuals" : " per cicle"}.`);
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
    taxId: data.taxId.trim(),
    contactName: data.contactName.trim(),
    contactPhone: data.contactPhone.trim(),
    contactEmail: data.contactEmail.trim(),
    address: data.address.trim(),
    city: data.city.trim(),
    postalCode: data.postalCode.trim(),
    notes: data.notes.trim(),
  };
  if (state.clientStatuses[clientName] === "Baixa") {
    state.services.forEach((service) => {
      if (service.client === clientName) clearServiceAssignments(service);
    });
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
  state.services.forEach((service) => {
    if (service.client === data.client && isClientOnVacation(service)) clearServiceAssignments(service);
  });
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
  const vacationWorker = getWorker(data.workerId);
  state.services.forEach((service) => {
    if (serviceHasWorkerAssignment(service, data.workerId) && isWorkerOnVacation(vacationWorker, service)) clearServiceAssignments(service, data.workerId);
  });
  if (state.draftAssignments) {
    Object.entries(state.draftAssignments).forEach(([serviceId, workerId]) => {
      const service = getAssignmentUnit(serviceId);
      if (workerId === data.workerId && service && isWorkerOnVacation(vacationWorker, service)) state.draftAssignments[serviceId] = "";
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
  els.autoAssignModalTitle.textContent = targetDraftMode ? "Proposta per al mode assignació" : "Proposta per a la planificació confirmada";
  els.autoAssignModalSubtitle.textContent = targetDraftMode
    ? "Si confirmes, aquests canvis quedaran com a assignació provisional dins el mode assignació."
    : "Si confirmes, aquests canvis s'aplicaran directament a la planificació confirmada.";
  els.autoAssignModalSummary.innerHTML = [
    ["Actual", Math.round(confirmed.score), confirmed.label],
    ["Proposta", Math.round(proposalScore.score), proposalScore.label],
    ["Diferencia", `${delta >= 0 ? "+" : ""}${delta}`, `${changes.length} assignacions modificades`],
    ["Coberts", proposalScore.assigned, "serveis amb treballador"],
    ["Mode", targetDraftMode ? "Assignació" : "Confirmat", targetDraftMode ? "provisional" : "aplicació directa"],
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
  showToast(targetDraftMode ? "Proposta aplicada al mode assignació." : "Proposta automàtica aplicada a la planificació confirmada.");
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

  state.services.forEach((service) => {
    assignmentUnitsFromServices([service]).forEach((unit) => {
      if (Object.hasOwn(result.assignments, unit.id)) {
        setSegmentAssignment(service, unit.segmentId, result.assignments[unit.id] || "");
      }
    });
  });
  state.draftAssignments = {};
}

function optimizeCalendarYear() {
  const occurrences = getYearOccurrences(Number(state.calendarYear) || new Date().getFullYear())
    .filter(matchesCalendarFilters)
    .filter((item) => !item.paused);
  let assigned = 0;

  occurrences.forEach((occurrence) => {
    const candidate = workerEligibilityForService(occurrence).find((item) => item.result.valid);
    const service = getService(occurrence.id);
    if (service && candidate) {
      setOccurrenceAssignment(service, occurrence.date, candidate.worker.id);
      assigned += 1;
    }
  });

  persist();
  render();
  showToast(`Any optimitzat per dies: ${assigned}/${occurrences.length} serveis amb candidat.`);
}

function completeService(serviceId, date, source = "modal") {
  const service = getAssignmentUnit(serviceId, date);
  const worker = getWorker(effectiveWorkerId(service));
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
  state.services.forEach((service) => {
    if (serviceHasWorkerAssignment(service, workerId)) clearServiceAssignments(service, workerId);
  });
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
  assignmentUnitsFromServices(state.services).forEach((unit) => {
    if (!Object.hasOwn(state.draftAssignments, unit.id)) state.draftAssignments[unit.id] = effectiveWorkerId(unit, false) || "";
  });
}

function effectiveWorkerId(service, useDraft = state.draftMode) {
  if (!service) return "";
  if (service.date) {
    const overrideKey = occurrenceAssignmentKey(service.id, service.date);
    if (Object.hasOwn(state.serviceAssignmentOverrides || {}, overrideKey)) {
      return state.serviceAssignmentOverrides[overrideKey] || "";
    }
  }
  if (useDraft && state.draftMode && Object.hasOwn(state.draftAssignments || {}, service.id)) return state.draftAssignments[service.id] || "";
  if (service.segmentId) {
    const segment = serviceSegments(service).find((item) => item.id === service.segmentId) || serviceSegments(getService(service.id)).find((item) => item.id === service.segmentId);
    const assignedWorker = segment?.assignments?.[0]?.workerId || "";
    if (assignedWorker) return assignedWorker;
  }
  return service.workerId || "";
}

function withEffectiveAssignment(service, useDraft = true) {
  return { ...service, workerId: effectiveWorkerId(service, useDraft) };
}

function assignmentUnitId(serviceId, segmentId, index = 0) {
  return index === 0 ? serviceId : `${serviceId}::${segmentId}`;
}

function splitAssignmentUnitId(id) {
  const [serviceId, segmentId = ""] = String(id || "").split("::");
  return { serviceId, segmentId };
}

function assignmentUnitsFromServices(services, date = "") {
  return services.flatMap((service) =>
    serviceSegments(service).map((segment, index) => ({
      ...service,
      id: assignmentUnitId(service.id, segment.id, index),
      serviceId: service.id,
      segmentId: segment.id,
      segments: [segment],
      day: segment.day,
      start: segment.start,
      end: segment.end,
      date: date || service.date || "",
      workerId: segment.assignments?.[0]?.workerId || service.workerId || "",
      locked: Boolean(service.locked),
    })),
  );
}

function setServiceAssignment(service, workerId) {
  if (!service) return;
  if (state.draftMode) {
    ensureDraftAssignments();
    state.draftAssignments[service.id] = workerId || "";
  } else {
    const target = getService(service.id);
    if (target) {
      setSegmentAssignment(target, service.segmentId || target.segments?.[0]?.id || "", workerId || "");
    }
  }
}

function syncPrimarySegmentAssignment(service, workerId) {
  if (!service) return;
  service.segments = normalizeServiceSegments(service, state.workers);
  const firstSegment = service.segments[0];
  if (!firstSegment) return;
  firstSegment.assignments = workerId ? [{ workerId, hours: segmentDuration(firstSegment) }] : [];
  service.workerId = workerId || "";
}

function setSegmentAssignment(service, segmentId, workerId) {
  if (!service) return;
  service.segments = normalizeServiceSegments(service, state.workers);
  const targetSegment = service.segments.find((segment) => segment.id === segmentId) || service.segments[0];
  if (!targetSegment) return;
  targetSegment.assignments = workerId ? [{ workerId, hours: segmentDuration(targetSegment) }] : [];
  service.workerId = service.segments[0]?.assignments?.[0]?.workerId || "";
}

function clearServiceAssignments(service, workerId = "") {
  if (!service) return;
  service.segments = normalizeServiceSegments(service, state.workers).map((segment) => ({
    ...segment,
    assignments: workerId ? segment.assignments.filter((assignment) => assignment.workerId !== workerId) : [],
  }));
  service.workerId = service.segments[0]?.assignments?.[0]?.workerId || "";
}

function serviceHasWorkerAssignment(service, workerId) {
  if (!service || !workerId) return false;
  if (service.workerId === workerId) return true;
  return serviceSegments(service).some((segment) => segment.assignments?.some((assignment) => assignment.workerId === workerId));
}

function setOccurrenceAssignment(service, date, workerId) {
  if (!service || !date) return;
  if (!state.serviceAssignmentOverrides || typeof state.serviceAssignmentOverrides !== "object" || Array.isArray(state.serviceAssignmentOverrides)) {
    state.serviceAssignmentOverrides = {};
  }
  const key = occurrenceAssignmentKey(service.id, date);
  const baseService = getService(service.id) || service;
  const baseUnit = assignmentUnitsFromServices([baseService]).find((unit) => unit.id === service.id || unit.segmentId === service.segmentId);
  const baseWorkerId = baseUnit?.workerId || service.workerId || "";
  if ((workerId || "") === baseWorkerId) {
    delete state.serviceAssignmentOverrides[key];
  } else {
    state.serviceAssignmentOverrides[key] = workerId || "";
  }
}

function occurrenceAssignmentKey(serviceId, date) {
  return `${serviceId}__${date}`;
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
  return assignmentUnitsFromServices(state.services).filter((unit) => (state.draftAssignments[unit.id] || "") !== (effectiveWorkerId(unit, false) || "")).length;
}

function removeDraftAssignmentsForMissingServices() {
  const serviceIds = new Set(assignmentUnitsFromServices(state.services).map((unit) => unit.id));
  if (state.draftAssignments) {
    Object.keys(state.draftAssignments).forEach((serviceId) => {
      if (!serviceIds.has(serviceId)) delete state.draftAssignments[serviceId];
    });
  }
  if (state.serviceAssignmentOverrides) {
    Object.keys(state.serviceAssignmentOverrides).forEach((key) => {
      const [serviceId] = key.split("__");
      if (!serviceIds.has(serviceId)) delete state.serviceAssignmentOverrides[key];
    });
  }
}

function confirmDraftAssignments() {
  if (!state.draftMode) return;
  ensureDraftAssignments();
  state.services.forEach((service) => {
    assignmentUnitsFromServices([service]).forEach((unit) => {
      if (Object.hasOwn(state.draftAssignments, unit.id)) {
        setSegmentAssignment(service, unit.segmentId, state.draftAssignments[unit.id] || "");
      }
    });
  });
  state.draftAssignments = {};
  persist();
  render();
  showToast("Mode assignació aplicat. Les assignacions proposades passen a ser la planificació confirmada.");
}

function discardDraftAssignments() {
  state.draftAssignments = {};
  persist();
  render();
  showToast("Proposta descartada. Es mantenen les assignacions confirmades.");
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

function previewWorkerLeave(workerId) {
  const worker = getWorker(workerId);
  if (!worker) return;
  state.draftMode = true;
  ensureDraftAssignments();
  Object.entries(state.draftAssignments).forEach(([serviceId, assignedWorkerId]) => {
    if (assignedWorkerId === workerId) state.draftAssignments[serviceId] = "";
  });
  state.proposedUnavailableWorkerId = workerId;
  const result = autoAssign();
  delete state.proposedUnavailableWorkerId;
  persist();
  render();
  showToast(`Proposta de baixa de ${worker.name}: ${result.assigned}/${requiredServices().length} serveis coberts.`);
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
  const service = getAssignmentUnit(serviceId);
  const candidate = bestCandidateForService(serviceId);
  if (!service || !candidate) return showToast("No hi ha cap candidat directe per aquest servei.");
  setServiceAssignment(service, candidate.id);
  persist();
  render();
  showToast(state.draftMode ? `${candidate.name} afegit al mode assignació de ${service.client}.` : `${candidate.name} assignat a ${service.client}.`);
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
  const service = getAssignmentUnit(serviceId);
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
  const workerState = workerStateWithoutService(service.id, service.date);
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

function workerStateWithoutService(serviceId, date = "") {
  const workerState = createEmptyWorkerState();
  const services = date ? getOccurrencesForDate(date).filter((service) => !service.paused) : requiredServices().map((service) => withEffectiveAssignment(service));
  services
    .filter((service) => !(service.id === serviceId && (!date || service.date === date)) && service.workerId && getWorker(service.workerId))
    .forEach((service) => applyWorkerState(service.workerId, service, workerState, 1));
  return workerState;
}

function workerUnavailableReason(reason, worker, service) {
  const labels = {
    baixa: `no actiu (${worker.status})`,
    "baixa proposada": "baixa proposada",
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

  if (state.proposedUnavailableWorkerId === worker.id) return invalidScore("baixa proposada");
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
      const service = getAssignmentUnit(select.dataset.bestServiceSelect);
      const worker = getWorker(select.value);
      if (!service || !worker) return;
      setServiceAssignment(service, worker.id);
      persist();
      render();
      showToast(state.draftMode ? `${worker.name} afegit al mode assignació.` : `${worker.name} assignat.`);
    });
  });
}

function bindDashboardNavigation() {
  document.querySelectorAll("[data-go-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.goView));
  });
}

function applySidebarState() {
  document.body.classList.toggle("sidebar-collapsed", Boolean(state.sidebarCollapsed));
  if (els.sidebarToggle) {
    els.sidebarToggle.textContent = state.sidebarCollapsed ? "›" : "‹";
    els.sidebarToggle.setAttribute("aria-label", state.sidebarCollapsed ? "Expandir menu lateral" : "Colapsar menu lateral");
  }
}

function sortIncidents(a, b) {
  const rank = { critical: 0, warning: 1, muted: 2 };
  return (rank[a.severity] ?? 3) - (rank[b.severity] ?? 3) || a.title.localeCompare(b.title);
}

function serviceMeta(service) {
  const dateOrDay = service.recurrenceType === "once" && service.activeFrom ? formatDisplayDate(service.activeFrom) : service.day;
  return `${dateOrDay} · ${service.start}-${service.end} · ${service.zone} · ${formatHours(duration(service))}`;
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
  if (els.quickServiceForm) els.quickServiceForm.elements.zone.innerHTML = zoneNames.map((zone) => `<option>${zone}</option>`).join("");
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

function fillQuickServiceControls() {
  if (!els.quickServiceForm) return;
  els.quickServiceClientOptions.innerHTML = uniqueClients()
    .map((client) => `<option value="${escapeHtml(client)}" label="${escapeHtml(clientStatus(client))}"></option>`)
    .join("");
  els.quickServiceDays.innerHTML = dayNames
    .map(
      (day) => `
        <label class="day-check">
          <input name="days" type="checkbox" value="${day}" />
          ${day}
        </label>
      `,
    )
    .join("");
  fillSelect(
    els.quickServiceForm.elements.workerId,
    [{ value: "", label: "Selecciona treballador" }, ...state.workers.filter(isWorkerActive).map((worker) => ({ value: worker.id, label: worker.name }))],
  );
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

function fillAccessControls() {
  if (!els.userRole || !els.userWorker) return;
  const workerOptions = state.workers
    .map((worker) => `<option value="${worker.id}">${escapeHtml(worker.name)}</option>`)
    .join("");
  els.userWorker.innerHTML = workerOptions;
  if (!state.userWorkerId || !state.workers.some((worker) => worker.id === state.userWorkerId)) {
    state.userWorkerId = firstWorkerId();
  }
  els.userRole.value = state.userRole === "worker" ? "worker" : "admin";
  els.userWorker.value = state.userWorkerId || "";
  els.userWorker.hidden = state.userRole !== "worker";
}

function applyAccessMode() {
  const workerMode = isWorkerSession();
  document.body.classList.toggle("worker-session", workerMode);
  document.querySelectorAll("[data-view='risks'], [data-view='clients'], [data-view='workers'], [data-view='vacations'], [data-view='options']").forEach((button) => {
    button.hidden = workerMode;
  });
  document.querySelector("#draftModeControl")?.classList.toggle("is-hidden", workerMode);
  document.querySelector("#autoAssign")?.classList.toggle("is-hidden", workerMode);
  document.querySelector("#quickServiceOpen")?.classList.toggle("is-hidden", workerMode);
  document.querySelector("#confirmDraft")?.classList.toggle("is-hidden", workerMode || !state.draftMode);
  document.querySelector("#discardDraft")?.classList.toggle("is-hidden", workerMode || !state.draftMode);
  document.querySelector("#clearAssignments")?.classList.toggle("is-hidden", workerMode);
  if (workerMode && ["risks", "clients", "workers", "vacations", "options"].includes(location.hash.slice(1))) {
    switchView("dashboard");
  }
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

function syncServiceModeControls() {
  if (!els.serviceForm) return;
  const isSingle = els.serviceForm.elements.serviceMode.value === "single";
  els.serviceFormTitle.textContent = isSingle ? "Servei puntual" : "Servei recurrent";
  els.serviceSubmitButton.textContent = isSingle ? "Desar servei puntual" : els.serviceForm.dataset.editingRecurrence ? "Desar canvis" : "Desar recurrencia";
  els.serviceForm.querySelector("[data-single-service-field]")?.classList.toggle("is-hidden", !isSingle);
  els.serviceForm.querySelector(".day-picker:not(.service-mode-picker)")?.classList.toggle("is-hidden", isSingle);
  els.serviceForm.elements.recurrenceType.closest("label").classList.toggle("is-hidden", isSingle);
  els.serviceForm.elements.activeFrom.closest("label").classList.toggle("is-hidden", isSingle);
  els.serviceForm.elements.activeTo.closest("label").classList.toggle("is-hidden", isSingle);
  if (isSingle) {
    const singleDate = els.serviceForm.elements.singleDate.value || formatDateInput(new Date());
    els.serviceForm.elements.singleDate.value = singleDate;
    els.serviceForm.elements.activeFrom.value = singleDate;
    els.serviceForm.elements.activeTo.value = singleDate;
    els.serviceForm.elements.recurrenceType.value = "once";
  } else if (els.serviceForm.elements.recurrenceType.value === "once") {
    els.serviceForm.elements.recurrenceType.value = "weekly";
  }
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
  const isSingle = els.serviceForm.elements.serviceMode.value === "single";
  const days = getSelectedServiceDays();
  const durationHours = Number(els.serviceForm.elements.durationHours.value || 0);
  if (isSingle) {
    const singleDate = els.serviceForm.elements.singleDate.value;
    els.weeklyPreview.textContent = `${formatHours(durationHours)} · ${singleDate ? formatDisplayDate(singleDate) : "Dia pendent"} · Puntual`;
    return;
  }
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
    taxId: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    address: "",
    city: "",
    postalCode: "",
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
  return orderedServices(state.services.filter((service) => service.day === dayName && serviceOccursOnDate(service, date)))
    .flatMap((service) => assignmentUnitsFromServices([service], date))
    .map((occurrence) => {
      occurrence.workerId = effectiveWorkerId(occurrence);
      const worker = getWorker(occurrence.workerId);
      occurrence.paused = isClientOnVacation(occurrence);
      occurrence.workerAbsent = Boolean(worker && isWorkerOnVacation(worker, occurrence));
      occurrence.status = occurrenceStatus(occurrence);
      return occurrence;
    })
    .filter(serviceVisibleToCurrentUser);
}

function serviceOccursOnDate(service, date) {
  if (!serviceClientAvailable(service)) return false;
  if (!dateInRange(date, service.activeFrom || state.weekStart, service.activeTo || "")) return false;
  const type = service.recurrenceType || "weekly";
  const anchor = service.activeFrom || state.weekStart;
  if (type === "once") return date === anchor;
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
  const segments = serviceSegments(service);
  return segments.length ? segments.reduce((sum, segment) => sum + segmentDuration(segment), 0) : 0;
}

function segmentDuration(segment) {
  return (toMinutes(segment.end) - toMinutes(segment.start)) / 60;
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
  if (service.recurrenceType === "once" && validDateValue(service.activeFrom)) return service.activeFrom;
  const date = new Date(`${state.weekStart}T00:00:00`);
  date.setDate(date.getDate() + dayNames.indexOf(service.day));
  return formatDateInput(date);
}

function serviceSegments(service) {
  if (Array.isArray(service?.segments) && service.segments.length) return service.segments;
  if (!service) return [];
  return [makeServiceSegment(service.day, service.start || "09:00", service.end || "11:00", service.workerId || "")];
}

function normalizeServiceSegments(service, workers) {
  const sourceSegments = Array.isArray(service.segments) && service.segments.length
    ? service.segments
    : [{ day: service.day, start: service.start, end: service.end, assignments: service.workerId ? [{ workerId: service.workerId }] : [] }];
  return sourceSegments
    .map((segment) => {
      const day = dayNames.includes(segment.day) ? segment.day : dayNames.includes(service.day) ? service.day : dayNames[0];
      const start = segment.start || service.start || "09:00";
      const end = segment.end || service.end || addHours(start, 2);
      const assignments = Array.isArray(segment.assignments)
        ? segment.assignments
            .filter((assignment) => workers.some((worker) => worker.id === assignment.workerId))
            .map((assignment) => ({
              workerId: assignment.workerId,
              hours: Number(assignment.hours) || segmentDuration({ start, end }),
            }))
        : [];
      return {
        id: segment.id || crypto.randomUUID(),
        day,
        start,
        end,
        assignments,
      };
    })
    .filter((segment) => toMinutes(segment.end) > toMinutes(segment.start));
}

function requiredServices() {
  return state.services
    .filter((service) => serviceClientAvailable(service) && serviceOccursOnDate(service, serviceDateISO(service)) && !isClientOnVacation(service))
    .flatMap((service) => assignmentUnitsFromServices([service], serviceDateISO(service)))
    .map((service) => withEffectiveAssignment(service))
    .filter(serviceVisibleToCurrentUser);
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

function firstWorkerId() {
  return state.workers[0]?.id || "";
}

function isWorkerSession() {
  return state.userRole === "worker" && Boolean(state.userWorkerId);
}

function serviceVisibleToCurrentUser(service) {
  if (!isWorkerSession()) return true;
  return effectiveWorkerId(service) === state.userWorkerId;
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

function serviceClientAvailable(service) {
  return Boolean(service?.allowInactiveClient) || isClientActive(service.client);
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
  const { serviceId: baseServiceId } = splitAssignmentUnitId(serviceId);
  return state.services.find((service) => service.id === baseServiceId);
}

function getAssignmentUnit(unitId, date = "") {
  const service = getService(unitId);
  if (!service) return null;
  return assignmentUnitsFromServices([service], date).find((unit) => unit.id === unitId) || assignmentUnitsFromServices([service], date)[0] || null;
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
    segments: [makeServiceSegment(day, start, end, workerId)],
    locked: false,
    recurrenceType: "weekly",
    activeFrom: formatDateInput(getMonday(new Date())),
    activeTo: "",
  };
}

function makeServiceSegment(day, start, end, workerId = "") {
  return {
    id: crypto.randomUUID(),
    day,
    start,
    end,
    assignments: workerId ? [{ workerId, hours: segmentDuration({ start, end }) }] : [],
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
    dashboardDate: rawState.dashboardDate || formatDateInput(new Date()),
    draftMode: Boolean(rawState.draftMode),
    developerMode: Boolean(rawState.developerMode),
    sidebarCollapsed: Boolean(rawState.sidebarCollapsed),
    draftAssignments: rawState.draftAssignments && typeof rawState.draftAssignments === "object" && !Array.isArray(rawState.draftAssignments)
      ? rawState.draftAssignments
      : {},
    serviceAssignmentOverrides: rawState.serviceAssignmentOverrides && typeof rawState.serviceAssignmentOverrides === "object" && !Array.isArray(rawState.serviceAssignmentOverrides)
      ? rawState.serviceAssignmentOverrides
      : {},
    filter: rawState.filter || "all",
    plannerSearch: rawState.plannerSearch || "",
    clientStatusFilter: ["active", "inactive", "all"].includes(rawState.clientStatusFilter) ? rawState.clientStatusFilter : "active",
    workerStatusFilter: ["active", "inactive", "all"].includes(rawState.workerStatusFilter) ? rawState.workerStatusFilter : "active",
    userRole: rawState.userRole === "worker" ? "worker" : "admin",
    userWorkerId: rawState.userWorkerId || "",
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
  if (!validDateValue(normalized.dashboardDate)) normalized.dashboardDate = formatDateInput(new Date());

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

  normalized.services = normalized.services.map((service) => {
    const segments = normalizeServiceSegments(service, normalized.workers);
    const primarySegment = segments[0] || makeServiceSegment(dayNames[0], "09:00", "11:00");
    const primaryWorkerId = normalized.workers.some((worker) => worker.id === service.workerId)
      ? service.workerId
      : primarySegment.assignments[0]?.workerId || "";
    return {
      id: service.id || crypto.randomUUID(),
      recurringId: service.recurringId || `single-${service.id || crypto.randomUUID()}`,
      client: service.client || "Client sense nom",
      zone: zoneNames.includes(service.zone) ? service.zone : zoneNames[0],
      day: dayNames.includes(service.day) ? service.day : primarySegment.day,
      start: service.start || primarySegment.start,
      end: service.end || primarySegment.end,
      priority: ["Alta", "Mitjana", "Baixa"].includes(service.priority) ? service.priority : "Mitjana",
      requirements: service.requirements || "",
      recurrenceType: Object.hasOwn(recurrenceTypeNames, service.recurrenceType) ? service.recurrenceType : "weekly",
      activeFrom: validDateValue(service.activeFrom) ? service.activeFrom : normalized.weekStart,
      activeTo: validDateValue(service.activeTo) ? service.activeTo : "",
      workerId: primaryWorkerId,
      segments,
      locked: Boolean(service.locked),
      allowInactiveClient: Boolean(service.allowInactiveClient),
    };
  });

  normalized.draftAssignments = Object.fromEntries(
    assignmentUnitsFromServices(normalized.services).map((unit) => {
      const draftWorkerId = normalized.draftAssignments[unit.id];
      return [unit.id, normalized.workers.some((worker) => worker.id === draftWorkerId) ? draftWorkerId : unit.workerId || ""];
    }),
  );
  normalized.serviceAssignmentOverrides = Object.fromEntries(
    Object.entries(normalized.serviceAssignmentOverrides)
      .filter(([key, workerId]) => {
        const [serviceId, date] = key.split("__");
        const { serviceId: baseServiceId } = splitAssignmentUnitId(serviceId);
        return (
          normalized.services.some((service) => service.id === baseServiceId) &&
          validDateValue(date) &&
          (!workerId || normalized.workers.some((worker) => worker.id === workerId))
        );
      })
      .map(([key, workerId]) => [key, workerId || ""]),
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
  if (normalized.userWorkerId && !normalized.workers.some((worker) => worker.id === normalized.userWorkerId)) normalized.userWorkerId = "";
  if (normalized.userRole === "worker" && !normalized.userWorkerId) normalized.userWorkerId = normalized.workers[0]?.id || "";

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
          taxId: profile?.taxId || "",
          contactName: profile?.contactName || "",
          contactPhone: profile?.contactPhone || "",
          contactEmail: profile?.contactEmail || "",
          address: profile?.address || "",
          city: profile?.city || "",
          postalCode: profile?.postalCode || "",
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
