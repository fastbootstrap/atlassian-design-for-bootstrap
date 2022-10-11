(() => {
  'use strict';

  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
  });

  document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
    new bootstrap.Popover(popover);
  });

  document.querySelectorAll('.doc-tabs button[data-bs-toggle="tab"]').forEach((tab) => {
    tab.addEventListener('shown.bs.tab', (event) => {
      const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
      dataSpyList.forEach((dataSpyEl) => {
        bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
      });
    });
  });

  // Scroll the active sidebar link into view
  const sidenav = document.querySelector('.sidebar');
  if (sidenav) {
    const sidenavHeight = sidenav.clientHeight;
    const sidenavActiveLink = document.querySelector('.sidebar__link.active');
    if (sidenavActiveLink) {
      const sidenavActiveLinkTop = sidenavActiveLink.offsetTop;
      const sidenavActiveLinkHeight = sidenavActiveLink.clientHeight;
      const viewportTop = sidenavActiveLinkTop;
      const viewportBottom = viewportTop - sidenavHeight + sidenavActiveLinkHeight;

      if (sidenav.scrollTop > viewportTop || sidenav.scrollTop < viewportBottom) {
        sidenav.scrollTop = viewportTop - sidenavHeight / 2 + sidenavActiveLinkHeight / 2;
      }
    }
  }

  const searchModal = document.querySelector('#searchModal');
  if (searchModal) {
    searchModal.addEventListener('shown.bs.modal', () => {
      document.querySelector('#search-input').focus();
    });
  }
})();
