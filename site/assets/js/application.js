(() => {
  'use strict';

  const clipboard = new ClipboardJS('.bd-clipboard');
  clipboard.on('success', (event) => {
    const status = event.trigger.querySelector('.status');
    status.innerHTML='<i class="fa-solid fa-check text-success"></i>';
  });

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

  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme');

    if (!themeSwitcher) {
      return;
    }
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });
    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');
    if (focus) {
      themeSwitcher.focus();
    }
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  });
})();
