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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 22H6V11a1 1 0 0 0-1-1h-.5A4.505 4.505 0 0 0 0 14.5v5C0 21.981 2.019 24 4.5 24H9a1 1 0 1 0 0-2Zm-7-6h2v2H2v-2Zm2-3.95V14H2.055c.2-.977.968-1.75 1.945-1.95ZM2.055 20H4v1.95A2.503 2.503 0 0 1 2.055 20ZM19 0h-6c-2.757 0-5 2.243-5 5v4a4.996 4.996 0 0 0 3.751 4.842 1.001 1.001 0 0 0 1.218-.719.999.999 0 0 0-.72-1.217 2.986 2.986 0 0 1-.366-.128l4.406-3.782.475.48c.779.78 2.049.78 2.828 0L22 6.068V9a1 1 0 1 0 2 0V5c0-2.757-2.243-5-5-5Zm-.818 7.066-.474-.479a1.993 1.993 0 0 0-2.706-.114l-4.632 3.97A3.003 3.003 0 0 1 10 9V5c0-1.654 1.346-3 3-3h6a2.99 2.99 0 0 1 2.638 1.602l-3.457 3.464ZM14 4.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 14 4.5ZM24 15v6.5a2.5 2.5 0 1 1-2-2.45V15c0-.551-.448-1-1-1h-3c-.552 0-1 .449-1 1v6.5a2.5 2.5 0 1 1-2-2.45V15c0-1.654 1.346-3 3-3h3c1.654 0 3 1.346 3 3Z"/></svg>
  