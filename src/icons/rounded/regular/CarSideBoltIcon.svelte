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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.74 10.312 16.437 4.14a5.005 5.005 0 0 0-4.102-2.141H8.5a5.026 5.026 0 0 0-4.675 3.228l-2.072 5.465A3.998 3.998 0 0 0 0 14v1.5c0 1.207.86 2.217 2 2.45v.55C2 20.43 3.57 22 5.5 22S9 20.43 9 18.5V18h6v.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-.55c1.14-.232 2-1.242 2-2.45V15a5.011 5.011 0 0 0-3.26-4.688ZM7 18.5c0 .827-.673 1.5-1.5 1.5S4 19.327 4 18.5V18h3v.5ZM18.5 20c-.827 0-1.5-.673-1.5-1.5V18h3v.5c0 .827-.673 1.5-1.5 1.5Zm3.5-4.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V14c0-1.103.897-2 2-2h1a1 1 0 0 0 0-2h-.845l1.54-4.063A3.016 3.016 0 0 1 8.5 4h3.835c.98 0 1.9.48 2.461 1.284L18.084 10H17a1 1 0 0 0 0 2h2c1.654 0 3 1.346 3 3v.5Zm-8.191-5.654c.28.521.25 1.151-.077 1.645l-1.881 3.037a1 1 0 0 1-1.7-1.054l1.533-2.473H9.616c-.509 0-.994-.244-1.297-.653s-.396-.943-.249-1.43c.025-.082 2.079-3.441 2.079-3.441a.998.998 0 1 1 1.703 1.047L10.329 9h2.067a1.6 1.6 0 0 1 1.413.846Z"/></svg>
  