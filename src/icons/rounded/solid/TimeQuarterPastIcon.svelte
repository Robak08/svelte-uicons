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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.181.207A1 1 0 0 0 13 1.19v2.879A8.053 8.053 0 1 0 19.931 11h2.886a1 1 0 0 0 .983-1.181A12.047 12.047 0 0 0 14.181.207zM16 13h-2.277A1.994 1.994 0 1 1 11 10.277V7a1 1 0 0 1 2 0v3.277a2 2 0 0 1 .723.723H16a1 1 0 0 1 0 2zM2.986 4.968a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zm-1.6 3.987a1 1 0 1 1-1.17.8 1 1 0 0 1 1.167-.8zm8.742 12.868a1 1 0 1 1-1.17.794 1 1 0 0 1 1.167-.794zM6.008 1.9a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zM10.182.209A1 1 0 1 1 9 .98a1 1 0 0 1 1.182-.771zM.234 14.046a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zm1.681 3.963a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zM4.967 21a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zm16.047-1.967a1 1 0 1 1 1.17-.8 1 1 0 0 1-1.17.799zM17.992 22.1a1 1 0 1 1 1.17-.8 1 1 0 0 1-1.17.8zm-3.939 1.656a1 1 0 1 1 1.17-.795 1 1 0 0 1-1.17.791zM23.712 14a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/></svg>
  