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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-5.946-5.946a9.955 9.955 0 0 0 2.261-6.325C20.021 4.508 15.535.021 10.021.021s-10 4.487-10 10 4.486 10 10 10a9.951 9.951 0 0 0 6.325-2.261l5.946 5.946a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM2.021 10.021c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.588-8-8ZM10 4a4.965 4.965 0 0 0-3.535 1.465C5.521 6.408 5 7.664 5 9s.521 2.592 1.473 3.543l1.812 1.773c.474.463 1.094.693 1.715.693s1.241-.23 1.714-.693l1.821-1.781C14.479 11.592 15 10.336 15 9s-.521-2.591-1.465-3.535S11.335 4 10 4Zm2.129 7.113-1.813 1.773a.455.455 0 0 1-.632 0L7.879 11.12C7.313 10.554 7 9.801 7 8.999s.312-1.555.88-2.121c.565-.567 1.318-.879 2.12-.879s1.555.312 2.121.879c.566.566.879 1.319.879 2.121s-.313 1.555-.871 2.113ZM11 8.993a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
  