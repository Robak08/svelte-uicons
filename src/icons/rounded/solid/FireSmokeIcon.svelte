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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.308 23.981H4.692c-2.486 0-4.544-1.857-4.684-4.229a4.474 4.474 0 0 1 3.817-4.714 5.9 5.9 0 0 1 7.931-2.371.518.518 0 0 0 .488 0A5.852 5.852 0 0 1 15 11.981a6.017 6.017 0 0 1 5.198 3.011l-.008.049a4.474 4.474 0 0 1 3.802 4.711c-.14 2.371-2.198 4.229-4.684 4.229ZM9 9.981a7.79 7.79 0 0 1 3 .594 7.79 7.79 0 0 1 3-.594c1.32 0 2.595.334 3.728.933.173-.609.272-1.25.272-1.914-.009-4.167-3.895-6.945-4.675-7.458L12.868.169a1.018 1.018 0 0 0-1.464.374C11.19.957 11 1.86 11 2.296c0 1.5 1 1.954 1 2.954C12 6.078 11.538 7 10.259 7S8.5 6.078 8.5 5.25c0-.454.194-.727.194-.973a.792.792 0 0 0-.793-.792.775.775 0 0 0-.417.135S4.999 5.12 4.999 9c0 .667.099 1.309.273 1.92a7.893 7.893 0 0 1 3.727-.939Z"/></svg>
  