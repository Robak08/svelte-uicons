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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-tower-control {customClass}"><path d="M23.092 7.464A3.984 3.984 0 0 0 19.999 6H16V5c0-1.654-1.346-3-3-3V1a1 1 0 1 0-2 0v1C9.346 2 8 3.346 8 5v1H4.001c-1.203 0-2.33.533-3.093 1.464s-1.065 2.14-.829 3.32l.72 3.599A4.51 4.51 0 0 0 5.211 18H8v3c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3v-3h2.789a4.51 4.51 0 0 0 4.412-3.617l.72-3.599a3.983 3.983 0 0 0-.829-3.32Zm-1.547 1.268c.382.466.533 1.07.415 1.66L21.638 12H16V8h3.999c.602 0 1.165.267 1.546.731ZM10 12.001v-4h4v4h-4Zm1-8h2a1 1 0 0 1 1 1v1h-4v-1a1 1 0 0 1 1-1Zm-8.545 4.73A1.99 1.99 0 0 1 4.001 8H8v4H2.362l-.322-1.608a1.991 1.991 0 0 1 .415-1.66ZM14 21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3h4v3Zm4.789-5H5.211a2.506 2.506 0 0 1-2.449-2h18.476a2.506 2.506 0 0 1-2.449 2Z"/></svg>
  