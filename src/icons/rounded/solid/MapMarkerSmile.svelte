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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.778 3.222C17.7 1.145 14.938 0 12 0S6.299 1.145 4.222 3.222C2.144 5.299 1 8.061 1 11s1.144 5.7 3.25 7.805l3.943 3.643C9.216 23.449 10.568 24 12 24s2.784-.551 3.787-1.533l3.992-3.689c2.078-2.078 3.222-4.84 3.222-7.778s-1.145-5.701-3.222-7.778ZM14.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 7Zm-5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 7Zm7.207 6.05C15.45 14.307 13.778 15 12 15s-3.45-.692-4.707-1.95a.999.999 0 1 1 1.414-1.414C9.586 12.515 10.756 13 12 13s2.414-.484 3.293-1.364a.999.999 0 1 1 1.414 1.414Z"/></svg>
  