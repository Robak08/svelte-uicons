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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.669 12.15a2.243 2.243 0 0 1-.015-3.176l1.681-1.681a.999.999 0 1 1 1.414 1.414l-1.681 1.681a.235.235 0 0 0 0 .333l1.624 1.557a1 1 0 0 1-1.385 1.444L7.669 12.15Zm7.262-1.762c.092.092.092.241.015.318l-1.638 1.572a1 1 0 0 0 1.385 1.444l1.653-1.586a2.237 2.237 0 0 0 0-3.161l-1.681-1.681a.999.999 0 1 0-1.414 1.414l1.681 1.681ZM24 18c0 1.654-1.346 3-3 3H3c-1.654 0-3-1.346-3-3 0-1.304.836-2.415 2-2.828V8c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5v7.172c1.164.413 2 1.524 2 2.828ZM4 8v7h4.5c.265 0 .52.105.707.293l.707.707h4.172l.707-.707A1 1 0 0 1 15.5 15H20V8c0-1.654-1.346-3-3-3H7C5.346 5 4 6.346 4 8Zm18 10c0-.551-.449-1-1-1h-5.086l-.707.707A1 1 0 0 1 14.5 18h-5a.997.997 0 0 1-.707-.293L8.086 17H3c-.551 0-1 .449-1 1s.449 1 1 1h18c.551 0 1-.449 1-1Z"/></svg>
  