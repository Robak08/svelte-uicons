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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.043 8.071C4.5.566 8.706.026 8.9.006A.924.924 0 0 1 9 0a4.511 4.511 0 0 1 2.415.817 1.015 1.015 0 0 0 1.171 0A4.507 4.507 0 0 1 15 0a.924.924 0 0 1 .105.006c.189.02 4.4.56 4.852 8.065a.734.734 0 0 1-.457.729A20.312 20.312 0 0 1 12 10a20.316 20.316 0 0 1-7.5-1.2.734.734 0 0 1-.457-.729Zm18.65 1.918a.942.942 0 0 0-1.028-.035C20.564 10.6 17.538 12 12 12s-8.563-1.4-9.665-2.046a.942.942 0 0 0-1.028.035A2.632 2.632 0 0 0 0 12c0 3.69 6.194 4 12 4s12-.31 12-4a2.632 2.632 0 0 0-1.307-2.011ZM16.5 17a3.5 3.5 0 0 0-3.235 2.174 4.685 4.685 0 0 0-2.53 0 3.494 3.494 0 1 0 .193 2.033A3.52 3.52 0 0 1 12 21a3.514 3.514 0 0 1 1.072.207A3.5 3.5 0 1 0 16.5 17Z"/></svg>
  