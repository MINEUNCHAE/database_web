const items = [
  { key: 'profile', label: '내정보' },
  { key: 'orders', label: '즐겨찾기' },
  { key: 'settings', label: '설정' }
];

let activeKey = 'profile'; // 초기 활성화 키

function renderSidebar() {
  const sidebar = document.getElementById("my-sidebar");
  sidebar.innerHTML = `
    <ul class="sidebar-list">
      ${items.map(item => `
        <li class="sidebar-item">
          <button 
            class="${activeKey === item.key ? 'active' : 'default'}"
            onclick="onSidebarItemClick('${item.key}')">
            ${item.label}
          </button>
        </li>
      `).join('')}
    </ul>
  `;
}

function onSidebarItemClick(key) {
  activeKey = key;
  renderSidebar();
}

// 첫 렌더링
renderSidebar();
