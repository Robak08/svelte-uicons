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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM3.75 15c1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1S22 14.306 22 14a5.006 5.006 0 0 0-5-5h-4V6.816A3 3 0 0 0 15 4 6.683 6.683 0 0 0 13.332.59a1.856 1.856 0 0 0-2.663 0A6.676 6.676 0 0 0 9 4a3 3 0 0 0 2 2.816V9H7a5.006 5.006 0 0 0-5 5c0 .306.661 1 1.75 1ZM3 20h18a1 1 0 0 0 1-1v-2.375a4.359 4.359 0 0 1-1.75.375 4.194 4.194 0 0 1-2.75-1 4.309 4.309 0 0 1-5.5.015A4.309 4.309 0 0 1 6.5 16a4.194 4.194 0 0 1-2.75 1A4.359 4.359 0 0 1 2 16.625V19a1 1 0 0 0 1 1Z"/></svg>
  