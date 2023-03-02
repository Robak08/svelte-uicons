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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 14a1 1 0 0 1 0 2 1 1 0 0 1 0-2Zm-5 1a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm-4 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm0 3a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm2.974-12.854a1.036 1.036 0 0 1-.742-.569A8.062 8.062 0 0 0 8.5.137a7.946 7.946 0 0 0-6.384 6.5 8.147 8.147 0 0 0 .033 2.889 1 1 0 0 1-.345.9 5.538 5.538 0 0 0 2.327 9.39A2.943 2.943 0 0 1 4.771 17a1.437 1.437 0 0 0 .3-1.351A3.005 3.005 0 0 1 8 12c1.091-.112 1.5.892 2.708.3A2.476 2.476 0 0 1 12 12c1.125-.073 1.413.806 2.75.28a3 3 0 0 1 3.506 4.687c-.841 1.043.07 1.859-.4 2.9 8.034-1.551 8.182-13 .118-14.721ZM14 22a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  