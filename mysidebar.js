const items = [
  { key: 'profile', label: '내정보' },
  { key: 'orders', label: '즐겨찾기' },
  { key: 'settings', label: '설정' }
];

let activeKey = 'profile'; // 초기 활성화 키
const pageContents = {
  profile: `
    <h2>내 정보</h2>
    <p>이곳에서 개인정보를 확인할 수 있습니다.</p>
  `,
  orders: `
    <h2>즐겨찾기</h2>
    <p>즐겨찾기 목록이 여기에 표시됩니다.</p>
  `,
  settings: `
    <h2>설정</h2>
    <p>환경설정 페이지입니다.</p>
  `
};

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
  renderContent(key); 
}
function renderContent(key) {
  const content = document.getElementById("content-area");
  content.innerHTML = pageContents[key];
}

// 첫 렌더링
renderSidebar();
renderContent(activeKey);
