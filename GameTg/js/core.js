const RANKS = [
    "Пешеход", "Скутерист", "Хруст", "Гаражный копатель", "Ночной райдер",
    "Уличный боец", "Мастер междурядья", "Охотник за запчастями", "Байкер-одиночка", "Член клуба",
    "Ловец удачи", "Акула аукциона", "Мастер отсечки", "Коллекционер хрома", "Дорожный маршал",
    "Бензиновый барон", "Разрушитель лимитов", "Теневой дилер", "Призрачный гонщик", "Абсолют"
];
function updateGameState() {
    const balance = localStorage.getItem('octanes') || 5000000;
    const xp = parseInt(localStorage.getItem('octanes_xp') || 0);
    const lvl = parseInt(localStorage.getItem('octanes_level') || 1);
    document.querySelectorAll('.balance-val').forEach(el => {
        el.innerText = Number(balance).toLocaleString() + " $";
    });
    document.querySelectorAll('.level-val').forEach(el => {
        el.innerText = lvl;
    });
    const rankNameEl = document.getElementById('current-rank-name');
    if (rankNameEl) {
        rankNameEl.innerText = RANKS[lvl - 1] || "Абсолют";
    }
    const xpFill = document.getElementById('xp-fill');
    if (xpFill) {
        const nextLevelXP = lvl * 1000;
        xpFill.style.width = (xp / nextLevelXP * 100) + "%";
    }
    const xpText = document.getElementById('xp-text');
    if (xpText) {
        xpText.innerText = `${xp} / ${lvl * 1000} XP`;
    }
}
function addXP(amount) {
    let xp = parseInt(localStorage.getItem('octanes_xp') || 0);
    let lvl = parseInt(localStorage.getItem('octanes_level') || 1);
    xp += amount;
    let nextLevelXP = lvl * 1000;
    if (xp >= nextLevelXP) {
        xp -= nextLevelXP;
        lvl++;
        alert(`⬆️ УРОВЕНЬ ПОВЫШЕН! Теперь ты: ${RANKS[lvl-1] || "Абсолют"}`);
    }
    localStorage.setItem('octanes_xp', xp);
    localStorage.setItem('octanes_level', lvl);
    updateGameState();
}
window.addEventListener('load', updateGameState);
function addXP(amount) {
    let xp = parseInt(localStorage.getItem('userXP')) || 0;
    let lvl = parseInt(localStorage.getItem('userLevel')) || 1;
    xp += Math.floor(amount);
    let nextLevelXP = lvl * 2500;
    if (xp >= nextLevelXP) {
        xp -= nextLevelXP;
        lvl++;
        alert(`🆙 УРОВЕНЬ ПОВЫШЕН! Теперь ты: ${lvl >= 16 ? 'ЛЕГЕНДА' : lvl >= 6 ? 'PRO' : 'Новичок'} (${lvl} LVL)`);
    }
    localStorage.setItem('userXP', xp);
    localStorage.setItem('userLevel', lvl);
    if (typeof updateStats === 'function') updateStats();
}function syncBalance() {
    const bal = localStorage.getItem('octanes') || "5000000";
    const balanceElements = document.querySelectorAll('#balance-value, #user-balance, #balancedisplay');
    
    balanceElements.forEach(el => {
        el.innerText = parseInt(bal).toLocaleString();
    });
}