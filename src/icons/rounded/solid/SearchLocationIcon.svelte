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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-5.946-5.946a9.955 9.955 0 0 0 2.261-6.325C20.021 4.508 15.535.021 10.021.021s-10 4.487-10 10 4.486 10 10 10a9.951 9.951 0 0 0 6.325-2.261l5.946 5.946a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Zm-10.172-9.758-1.821 1.781c-.473.463-1.093.693-1.714.693s-1.241-.23-1.715-.693l-1.812-1.773C5.521 11.592 5 10.336 5 9s.521-2.592 1.465-3.535C7.408 4.521 8.664 4 10 4s2.591.521 3.535 1.465S15 7.664 15 9s-.521 2.592-1.465 3.535ZM10 6c-.802 0-1.555.312-2.12.879C7.313 7.445 7 8.198 7 9s.312 1.555.879 2.121l1.805 1.766c.174.17.458.17.632 0l1.813-1.773c.559-.559.871-1.312.871-2.113s-.313-1.555-.879-2.121A2.982 2.982 0 0 0 10 6.001Zm0 3.993a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  