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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v22c0 .55-.45 1-1 1Zm-8.85-5.5 5.08-4.79c.49-.43.76-1.06.76-1.71s-.28-1.28-.75-1.69l-5.1-4.82c-.56-.51-1.33-.63-2.02-.33S0 6.12 0 6.88v10.25c0 .75.43 1.41 1.12 1.72a1.87 1.87 0 0 0 2.03-.34Zm19.73.34c.69-.3 1.12-.96 1.12-1.72V6.88c0-.75-.43-1.41-1.12-1.72a1.86 1.86 0 0 0-2.03.34l-5.08 4.79c-.49.44-.76 1.06-.76 1.71s.28 1.27.75 1.69l5.11 4.81a1.847 1.847 0 0 0 2.02.34Z"/></svg>
  