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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.598 11.718-2.701-7.427A5.016 5.016 0 0 0 16.198 1H7.802a5.016 5.016 0 0 0-4.699 3.291L.402 11.718A6.657 6.657 0 0 0 0 14v1c0 1.632.786 3.084 2 3.997V21c0 1.654 1.346 3 3 3s3-1.346 3-3v-1h8v1c0 1.654 1.346 3 3 3s3-1.346 3-3v-2.003A4.994 4.994 0 0 0 24 15v-1c0-.78-.135-1.548-.402-2.282ZM6 21c0 .551-.449 1-1 1s-1-.449-1-1v-1.101c.323.066.658.101 1 .101h1v1Zm14 0c0 .551-.449 1-1 1s-1-.449-1-1v-1h1c.342 0 .677-.035 1-.101V21Zm2-6c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-1c0-.338.036-.672.108-1H4v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2H2.792l2.191-6.025A3.008 3.008 0 0 1 7.802 3h8.396c1.257 0 2.39.793 2.819 1.975L21.208 11H17a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1.892c.072.328.108.662.108 1v1Zm-7.191-5.154c.28.521.25 1.151-.077 1.645l-1.881 3.037a1 1 0 0 1-1.7-1.054l1.533-2.473h-2.068c-.509 0-.994-.244-1.297-.653s-.396-.943-.249-1.43c.025-.082 2.079-3.441 2.079-3.441a.999.999 0 1 1 1.703 1.047L11.329 9h2.067a1.6 1.6 0 0 1 1.413.846Z"/></svg>
  