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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 21c0 1.626-1.718 3-3.75 3a4.208 4.208 0 0 1-2.75-1 4.317 4.317 0 0 1-5.5.014A4.295 4.295 0 0 1 6.513 23a4.212 4.212 0 0 1-2.763 1C1.718 24 0 22.626 0 21a1 1 0 0 1 2 0c0 .306.661 1 1.75 1a2.005 2.005 0 0 0 1.6-.684 1.973 1.973 0 0 0-.133-.189 12.188 12.188 0 0 1-3.187-6.183 3 3 0 0 1 2.006-3.388L11 9.279V19a1 1 0 0 0 2 0V9.279l6.931 2.275a3.006 3.006 0 0 1 2 3.388 12.152 12.152 0 0 1-3.156 6.183 1.932 1.932 0 0 0-.128.184A2.023 2.023 0 0 0 20.25 22c1.068 0 1.75-.656 1.75-1a1 1 0 0 1 2 0ZM12 7a5.839 5.839 0 0 1 1.624.378L20 9.471V7.4A3.4 3.4 0 0 0 16.6 4H15V3a3 3 0 0 0-6 0v1H7.4A3.4 3.4 0 0 0 4 7.4v2.063l6.379-2.085A5.753 5.753 0 0 1 12 7Z"/></svg>
  