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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1 8c-.55 0-1-.45-1-1V5c0-2.76 2.24-5 5-5h2c.55 0 1 .45 1 1s-.45 1-1 1H5C3.35 2 2 3.35 2 5v2c0 .55-.45 1-1 1Zm7 15c0-.55-.45-1-1-1H5c-1.65 0-3-1.35-3-3v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 2.76 2.24 5 5 5h2c.55 0 1-.45 1-1Zm16-4v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.65-1.35 3-3 3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c2.76 0 5-2.24 5-5ZM9.52 17.19 12 15.53l2.52 1.64a.912.912 0 0 0 1.37-1.05l-.9-2.73 2.17-1.77c.29-.25.4-.65.27-1.02s-.48-.6-.86-.6h-2.75l-.97-2.61c-.13-.36-.48-.6-.86-.6s-.73.24-.86.6L10.16 10H7.41c-.38 0-.73.24-.86.6a.9.9 0 0 0 .27 1.01L9 13.38l-.86 2.76c-.12.37.01.78.32 1.01.16.12.36.18.55.18.18 0 .36-.05.51-.15Zm10.06-10.4 3.54-1.77c.55-.32.88-.89.88-1.52s-.33-1.2-.93-1.54L19.62.23c-.55-.31-1.2-.31-1.75 0-.55.32-.87.88-.87 1.52v3.49A1.759 1.759 0 0 0 18.76 7c.3 0 .57-.07.81-.21Z"/></svg>
  