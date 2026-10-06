/**
 * GlobalPath Education - Admin Universal CRUD Engine
 * Powers all Admin pages: Students, Universities, Services, Applications, Orders, Messages, Blog, Testimonials, Gallery, Pricing
 * Real-time Search, Filters, Modals, Pagination & LocalStorage Sync
 */

const AdminCRUD = {
  activeResource: '',
  currentPage: 1,
  pageSize: 6,
  searchQuery: '',
  filterStatus: 'all',

  init(resourceName, renderRowCallback) {
    this.activeResource = resourceName;
    this.renderRowCallback = renderRowCallback;
    this.bindEvents();
    this.render();
  },

  getData() {
    if (typeof GlobalData === 'undefined') return [];
    return GlobalData.get(this.activeResource) || [];
  },

  getFilteredData() {
    let list = this.getData();

    // Filter by status if selected
    if (this.filterStatus && this.filterStatus !== 'all') {
      list = list.filter(item => {
        const statusVal = item.status || item.applicationStatus || '';
        return String(statusVal).toLowerCase() === this.filterStatus.toLowerCase();
      });
    }

    // Filter by search query
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(item => {
        return Object.values(item).some(val => {
          if (typeof val === 'string' || typeof val === 'number') {
            return String(val).toLowerCase().includes(q);
          }
          return false;
        });
      });
    }

    return list;
  },

  render() {
    const list = this.getFilteredData();
    const totalItems = list.length;
    const totalPages = Math.ceil(totalItems / this.pageSize) || 1;

    if (this.currentPage > totalPages) this.currentPage = totalPages;
    if (this.currentPage < 1) this.currentPage = 1;

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const paginatedItems = list.slice(startIndex, startIndex + this.pageSize);

    const tbody = document.getElementById('crudTableBody');
    if (!tbody) return;

    if (paginatedItems.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="10" class="text-center py-5 text-muted">
            <i class="bi bi-inbox fs-1 d-block mb-2 text-subtle"></i>
            <strong>No records found</strong>
            <p class="small mb-0">Try changing your search query or add a new record.</p>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = paginatedItems.map((item, index) => this.renderRowCallback(item, startIndex + index)).join('');
    }

    // Update Pagination UI
    this.updatePagination(totalItems, totalPages, startIndex, paginatedItems.length);
  },

  updatePagination(totalItems, totalPages, startIndex, pageCount) {
    const infoEl = document.getElementById('crudTableInfo');
    if (infoEl) {
      const start = totalItems === 0 ? 0 : startIndex + 1;
      const end = startIndex + pageCount;
      infoEl.textContent = `Showing ${start} to ${end} of ${totalItems} entries`;
    }

    const paginationEl = document.getElementById('crudPagination');
    if (!paginationEl) return;

    let html = `
      <li class="page-item ${this.currentPage === 1 ? 'disabled' : ''}">
        <button class="page-link" data-page="${this.currentPage - 1}"><i class="bi bi-chevron-left"></i></button>
      </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
      html += `
        <li class="page-item ${this.currentPage === i ? 'active' : ''}">
          <button class="page-link" data-page="${i}">${i}</button>
        </li>
      `;
    }

    html += `
      <li class="page-item ${this.currentPage === totalPages ? 'disabled' : ''}">
        <button class="page-link" data-page="${this.currentPage + 1}"><i class="bi bi-chevron-right"></i></button>
      </li>
    `;

    paginationEl.innerHTML = html;
  },

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('crudSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.currentPage = 1;
        this.render();
      });
    }

    // Status filter
    const statusFilter = document.getElementById('crudStatusFilter');
    if (statusFilter) {
      statusFilter.addEventListener('change', (e) => {
        this.filterStatus = e.target.value;
        this.currentPage = 1;
        this.render();
      });
    }

    // Pagination Click
    const paginationEl = document.getElementById('crudPagination');
    if (paginationEl) {
      paginationEl.addEventListener('click', (e) => {
        const btn = e.target.closest('button.page-link');
        if (btn && btn.dataset.page) {
          const p = parseInt(btn.dataset.page, 10);
          if (!isNaN(p)) {
            this.currentPage = p;
            this.render();
          }
        }
      });
    }

    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggleBtn');
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
        if (overlay) overlay.classList.toggle('active');
      });
    }

    if (overlay && sidebar) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('active');
      });
    }
  },

  deleteItem(id, itemDisplayName = 'this item') {
    if (confirm(`Are you sure you want to delete ${itemDisplayName}? This action cannot be undone.`)) {
      GlobalData.delete(this.activeResource, id);
      window.showToast(`${itemDisplayName} deleted successfully.`, 'success', 'Deleted');
      this.render();
    }
  },

  exportCSV() {
    const list = this.getFilteredData();
    if (list.length === 0) {
      window.showToast('No records to export.', 'danger');
      return;
    }

    const headers = Object.keys(list[0]).join(',');
    const rows = list.map(item => Object.values(item).map(val => `"${String(val).replace(/"/g, '""')}"`).join(','));
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${this.activeResource}_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.showToast(`Exported ${list.length} rows to CSV.`, 'success');
  }
};
