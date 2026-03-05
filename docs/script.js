const NAMES_URL = 'https://git-workshop-api.fawazabdullah.dev/names.txt';
const REFRESH_INTERVAL = 30000; // 30 seconds

const participantsContainer = document.getElementById('participants');
const participantCount = document.getElementById('participant-count');
const loadingEl = document.getElementById('loading');

/**
 * Fetch names.txt from the repo and return an array of names.
 */
async function fetchNames() {
    const response = await fetch(NAMES_URL + '?t=' + Date.now()); // cache-bust
    if (!response.ok) {
        throw new Error(`Failed to fetch names (${response.status})`);
    }
    const text = await response.text();
    return text
        .split('\n')
        .map(name => name.trim())
        .filter(name => name.length > 0);
}

/**
 * Get the initials from a name (first letter of first and last word).
 */
function getInitials(name) {
    const parts = name.split(' ').filter(p => p.length > 0);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
}

/**
 * Render the participant cards into the grid.
 */
function renderParticipants(names) {
    participantsContainer.innerHTML = '';
    participantCount.textContent = names.length;

    names.forEach((name, index) => {
        const card = document.createElement('div');
        card.className = 'participant-card';
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="participant-avatar">${getInitials(name)}</div>
            <span class="participant-name">${escapeHtml(name)}</span>
            <span class="participant-number">#${index + 1}</span>
        `;

        participantsContainer.appendChild(card);
    });
}

/**
 * Show an error state in the participants section.
 */
function renderError(message) {
    participantsContainer.innerHTML = `
        <div class="error-message">
            <div class="error-icon">😕</div>
            <p>${message}</p>
            <p style="font-size: 0.85rem; opacity: 0.7;">The page will try again in 30 seconds.</p>
        </div>
    `;
}

/**
 * Escape HTML to prevent XSS from names.
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Main function: fetch and render names.
 */
async function loadParticipants() {
    try {
        const names = await fetchNames();
        renderParticipants(names);
    } catch (error) {
        console.error('Error loading participants:', error);
        // Only show error if this is the first load (loading spinner is visible)
        if (loadingEl) {
            renderError('Could not load participants right now.');
        }
        // If names were already displayed, keep them and silently retry next cycle
    }
}

// Initial load
loadParticipants();

// Auto-refresh every 30 seconds
setInterval(loadParticipants, REFRESH_INTERVAL);
