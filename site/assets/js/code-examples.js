(() => {
  'use strict';

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example in docs and StackBlitz
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]').forEach((checkbox) => {
    checkbox.indeterminate = true;
  });

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links in docs examples only
  document.querySelectorAll('.doc-contents [href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });

  document.querySelectorAll('.bd-example-range [type="range"]').forEach((range) => {
    var max = 100;
    if (range.hasAttribute('max')) {
      max = parseInt(range.getAttribute('max'));
    }
    range.addEventListener('input', (e) => {
      var value = (range.value / max) * 100;
      range.style.setProperty('--track-fg-width', value + '%');
    });
  });

  // Loop over them and prevent submission
  document.querySelectorAll('.bd-example-validation .needs-validation').forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });

  // Toasts

  document.querySelectorAll('[data-example-toggle="toast"]').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(elem.getAttribute('data-example-target'));
      const toast = new bootstrap.Toast(target);
      toast.show();
    });
  });

  document.querySelectorAll('.bd-example-toast>.btn').forEach((elem) => {
    var count = 0;
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      if (elem.nextElementSibling.classList.contains('toast-container')) {
        // stacking
        var targets = elem.nextElementSibling.querySelectorAll('.toast');
        const index = count % targets.length;
        const toast = new bootstrap.Toast(targets[index]);
        toast.show();
        count = count + 1;
      }
    });
  });

  document.querySelectorAll('.bd-example-progressTracker [data-bs-step]').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const method = e.target.getAttribute('data-bs-step');
      const selector = e.target.getAttribute('data-bs-target');
      const target = document.querySelector(selector);
      var progressTracker = bootstrap.ProgressTracker.getOrCreateInstance(target);
      if (method == 'next') {
        progressTracker.next();
      } else if (method == 'prev') {
        progressTracker.prev();
      } else if (method == 'reset') {
        progressTracker.reset();
      }
    });
  });
})();
