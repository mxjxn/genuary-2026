/**
 * Lightweight UI helper to expose a compact control hub.
 * Renders a hamburger toggle that reveals the day selector and GitHub link.
 */

const DEFAULT_REPO_URL = 'https://github.com/mxjxn/genuary-2026';

const DAY_OPTIONS = [
  { id: 'day1', label: 'Day 1: Polyrhythms', href: '/day1.html' },
  { id: 'day2', label: 'Day 2: Layers', href: '/day2.html' },
  { id: 'day3', label: 'Day 3: Fibonacci Forever', href: '/day3.html' },
  { id: 'day4', label: 'Day 4: Low-Res Sequencer', href: '/day4.html' },
];

function buildControlHub(repoUrl) {
  const hub = document.createElement('div');
  hub.id = 'control-hub';

  const toggle = document.createElement('button');
  toggle.id = 'control-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Toggle navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'control-panel');
  toggle.innerHTML = '<span></span><span></span><span></span>';

  const panel = document.createElement('div');
  panel.id = 'control-panel';

  const label = document.createElement('label');
  label.htmlFor = 'day-selector';
  label.textContent = 'Jump to day';

  const selector = document.createElement('select');
  selector.id = 'day-selector';
  selector.innerHTML = '<option value="">Select a day</option>';
  DAY_OPTIONS.forEach((day) => {
    const option = document.createElement('option');
    option.value = day.id;
    option.textContent = day.label;
    selector.appendChild(option);
  });

  const link = document.createElement('a');
  link.id = 'github-link';
  link.href = repoUrl || DEFAULT_REPO_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'GitHub';

  const actions = document.createElement('div');
  actions.className = 'control-actions';
  actions.appendChild(selector);
  actions.appendChild(link);

  selector.addEventListener('change', (event) => {
    const target = DAY_OPTIONS.find((day) => day.id === event.target.value);
    if (target) {
      window.location.href = target.href;
    }
  });

  toggle.addEventListener('click', () => {
    const isOpen = hub.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  panel.appendChild(label);
  panel.appendChild(actions);

  hub.appendChild(toggle);
  hub.appendChild(panel);

  return hub;
}

/**
 * Mount the control hub once and keep its state in sync.
 * @param {Object} options
 * @param {string} options.currentDay - Identifier of the current day (e.g., 'day1').
 * @param {string} [options.repoUrl] - Repository URL; defaults to project repo.
 */
export function initDayControls({ currentDay, repoUrl = DEFAULT_REPO_URL } = {}) {
  let hub = document.getElementById('control-hub');

  if (!hub) {
    hub = buildControlHub(repoUrl);
    document.body.appendChild(hub);
  } else {
    const link = hub.querySelector('#github-link');
    if (link) {
      link.href = repoUrl;
    }
  }

  const selector = hub.querySelector('#day-selector');
  if (selector) {
    selector.value = currentDay || '';
  }
}
