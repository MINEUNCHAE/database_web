//메뉴 정의및 파일
const items = [
    { key: 'profile', label: '내 정보 수정', page: '' },
    { key: 'orders', label: '즐겨찾기 목록', page: '' }, 
    { key: 'settings', label: '설정', page: 'changeimf.html' }
];

let activeKey = 'profile'; 
function renderSidebar() {
    const sidebar = document.getElementById("my-sidebar");
    if (!sidebar) return;

    sidebar.innerHTML = `
        <ul class="sidebar-list">
            ${items.map(item => `
                <li class="sidebar-item">
                    <button 
                        class="${activeKey === item.key ? 'active' : ''}"
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

//페이지 이동 코드
async function renderContent(key) {
    const content = document.getElementById("content-area");
    if (!content) return;
    
    const currentItem = items.find(item => item.key === key);
    const fileUrl = currentItem ? currentItem.page : null;
    

    if (!fileUrl) {
        content.innerHTML = `<p style="color: gray; padding: 20px;">'${currentItem.label}'에 연결된 페이지 파일이 없습니다.</p>`;
        return;
    }

    
    try {
        const response = await fetch(fileUrl);
        const htmlText = await response.text();

        content.innerHTML = htmlText; 
        
    } catch (error) {
        console.error("파일 로드 중 오류:", error);
        content.innerHTML = `<p style="color: red; padding: 20px;">페이지 로드 오류: <strong>${fileUrl}</strong> 파일을 찾을 수 없거나 접근이 거부되었습니다. (Live Server 확인 요망)</p>`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    renderContent(activeKey); 
});