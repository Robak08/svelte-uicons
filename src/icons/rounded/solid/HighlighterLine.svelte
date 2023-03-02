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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1ZM2.48 11.89c-.31.73-.48 1.53-.48 2.34v4.35L.29 20.29a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.71-1.71h4.34c.81 0 1.61-.17 2.34-.48l-7.62-7.62Zm18.43-4.06-8.67 10.15c-.13.15-.27.29-.42.42l-8.23-8.23c.13-.14.27-.28.42-.41L14.17 1.1a4.53 4.53 0 0 1 6.14.21l.39.39c1.66 1.66 1.76 4.36.22 6.13Z"/></svg>
  