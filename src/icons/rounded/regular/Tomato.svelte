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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.686 5.1c.952-.99 2.3-3.786.314-4.1a1 1 0 0 0-1 1c0 1.235-1.127 2.546-3 2.9V1a1 1 0 0 0-2 0v3.9C9.127 4.546 8 3.235 8 2a1 1 0 0 0-1-1c-1.983.312-.642 3.106.31 4.1A8.854 8.854 0 0 0 0 14c0 4.721 4.276 10 10 10h4c11.992.128 13.457-17.025 2.686-18.9ZM14 22h-4a8.322 8.322 0 0 1-8-8c-.052-4.611 4.3-8.172 8.5-6.648A4.471 4.471 0 0 1 7.757 9.03a1 1 0 0 0-.727 1.212c.741 2.132 4.745-.975 4.968-1.565.209.579 4.237 3.7 4.972 1.565a1 1 0 0 0-.728-1.212A4.472 4.472 0 0 1 13.5 7.352C23.917 4.589 25.406 21.99 14 22Z"/></svg>
  