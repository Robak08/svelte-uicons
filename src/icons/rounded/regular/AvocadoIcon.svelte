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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 20c-6.14.017-4.438-10.17 0-10 4.44-.169 6.139 10.018 0 10Zm0-8c-1.93-.094-3.339 6.106 0 6 3.339.105 1.93-6.093 0-6Zm0 12c-5.514 0-10-4.119-10-9.182C1.981 2.592 13.721-5.417 17.589 4.355c.905 3.763 4.787 6.352 4.411 10.463C22 19.881 17.514 24 12 24Zm0-22c-6.37.261-14.267 18.97 0 20 6.356.142 10.443-6.863 6.445-11.68a16.967 16.967 0 0 1-2.772-5.39A3.779 3.779 0 0 0 12 2Z"/></svg>
  