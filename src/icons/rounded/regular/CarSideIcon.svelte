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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m20.74 10.312-4.3-6.171A5 5 0 0 0 12.336 2H8.5a5.024 5.024 0 0 0-4.675 3.228l-2.072 5.464A4 4 0 0 0 0 14v1.5a2.505 2.505 0 0 0 2 2.45v.55a3.5 3.5 0 0 0 7 0V18h6v.5a3.5 3.5 0 0 0 7 0v-.55a2.505 2.505 0 0 0 2-2.45V15a5.011 5.011 0 0 0-3.26-4.688ZM14.8 5.284 18.084 10H11V4h1.336A3 3 0 0 1 14.8 5.284Zm-9.1.653A3.014 3.014 0 0 1 8.5 4H9v6H4.154ZM7 18.5a1.5 1.5 0 0 1-3 0V18h3ZM18.5 20a1.5 1.5 0 0 1-1.5-1.5V18h3v.5a1.5 1.5 0 0 1-1.5 1.5Zm3.5-4.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V14a2 2 0 0 1 2-2h15a3 3 0 0 1 3 3Z"/></svg>
  