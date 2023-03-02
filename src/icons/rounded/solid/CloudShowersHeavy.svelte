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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 24a.979.979 0 0 1-.394-.081 1 1 0 0 1-.525-1.313l3-7a1 1 0 0 1 1.838.788l-3 7A1 1 0 0 1 10 24Zm-3.081-.606 3-7a1 1 0 0 0-1.838-.788l-3 7a1 1 0 0 0 .525 1.313A.979.979 0 0 0 6 24a1 1 0 0 0 .919-.606Zm8 0 3-7a1 1 0 1 0-1.838-.788l-3 7a1 1 0 0 0 .525 1.313A.979.979 0 0 0 14 24a1 1 0 0 0 .919-.606Zm3-18.262a1.028 1.028 0 0 1-.685-.556A8.051 8.051 0 0 0 8.5.138a7.945 7.945 0 0 0-6.384 6.5 8.147 8.147 0 0 0 .033 2.889.98.98 0 0 1-.308.866 5.537 5.537 0 0 0 1.42 9.121.893.893 0 0 0 1.175-.474l1.81-4.223a3 3 0 0 1 3.944-1.573 1.821 1.821 0 0 0 1.705-.033 2.7 2.7 0 0 1 2.3.035 1.848 1.848 0 0 0 1.7-.035 2.8 2.8 0 0 1 2.3.034 3.024 3.024 0 0 1 1.525 4.039l-.482 1.125a.559.559 0 0 0 .753.729c5.909-3.001 5.274-12.547-2.075-14.006Z"/></svg>
  