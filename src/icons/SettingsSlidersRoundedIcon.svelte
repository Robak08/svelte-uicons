<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-settings-sliders {customClass}"><path d="M1 4.75h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 0 0 0-2H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2ZM7.333 2a1.75 1.75 0 1 1-1.75 1.75A1.752 1.752 0 0 1 7.333 2ZM23 11h-2.736a3.727 3.727 0 0 0-7.194 0H1a1 1 0 0 0 0 2h12.07a3.727 3.727 0 0 0 7.194 0H23a1 1 0 0 0 0-2Zm-6.333 2.75a1.75 1.75 0 1 1 1.75-1.75 1.752 1.752 0 0 1-1.75 1.75ZM23 19.25H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 0 0 0-2ZM7.333 22a1.75 1.75 0 1 1 1.75-1.75A1.753 1.753 0 0 1 7.333 22Z"/></svg>
  