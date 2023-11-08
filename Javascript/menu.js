"use strict";

const topBar = `
<div class="container-fluid px-3">
<div class="d-flex align-items-center justify-content-center">
  <div>
    <p class="m-0 fs-6 text-center">
      To contact email us at
      <a
        href="mailto:info@profinancialsolution.com"
        class="text-light text-decoration-none"
        >info@profinancialsolution.com</a
      >
    </p>
  </div>
  <!-- <div>
    <p class="m-0">+1234567</p>
  </div> -->
</div>
</div>
`;

const pageTopBar = document.getElementById("pageTopBar");
pageTopBar.insertAdjacentHTML("beforeend", topBar);
