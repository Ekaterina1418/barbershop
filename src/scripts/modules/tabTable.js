document.addEventListener('DOMContentLoaded', function () {
  initializeTabs('.home-price__item', '.price__table');
});

function initializeTabs(tabSelector, tableSelector) {
  const tabs = document.querySelectorAll(tabSelector);
  const tables = document.querySelectorAll(tableSelector);

  const activeTab = document.querySelector('.home-price__item.active');
  if (activeTab) {
    const target = activeTab.getAttribute('data-target');
    document.getElementById(target).classList.add('price__table--active');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(tab => tab.classList.remove('active'));

      this.classList.add('active');

      const target = this.getAttribute('data-target');

      tables.forEach(table => table.classList.remove('price__table--active'));

      document.getElementById(target).classList.add('price__table--active');
    });
  });
}
