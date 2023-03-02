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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.778 3.222C17.7 1.144 14.937 0 12 0S6.3 1.145 4.222 3.222C2.144 5.299 1 8.061 1 11s1.144 5.7 3.25 7.805l3.943 3.643C9.215 23.449 10.568 24 12 24s2.784-.551 3.786-1.533l3.992-3.689C21.856 16.7 23 13.938 23 11s-1.144-5.701-3.222-7.778Zm-2.079 5.49-5.793 5.707a2.001 2.001 0 0 1-2.823-.005l-2.782-2.696a1 1 0 0 1 1.393-1.436l2.793 2.707 5.809-5.701A1 1 0 0 1 17.7 8.713Z"/></svg>
  