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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.778 3.222C17.7 1.144 14.937 0 12 0S6.3 1.145 4.222 3.222C2.144 5.299 1 8.061 1 11s1.144 5.7 3.25 7.805l3.943 3.643C9.215 23.449 10.568 24 12 24s2.784-.551 3.786-1.533l3.992-3.689C21.856 16.7 23 13.938 23 11s-1.144-5.701-3.222-7.778Zm-3.657 7.899-3.414 3.414a4.966 4.966 0 0 1-3.535 1.464H8a1 1 0 0 1-1-1v-1.171c0-1.335.521-2.591 1.465-3.536l3.414-3.414A3.002 3.002 0 0 1 17 8.999c0 .801-.313 1.555-.879 2.122Z"/><path d="m13.293 8.293-3.414 3.414A2.984 2.984 0 0 0 9 13.829V14h.172c.79 0 1.562-.32 2.121-.878l3.414-3.415c.189-.189.293-.44.293-.707s-.104-.518-.293-.707a1 1 0 0 0-1.414 0Z"/></svg>
  