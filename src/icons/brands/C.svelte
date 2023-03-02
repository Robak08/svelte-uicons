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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.592 9.197s-.354-3.298-3.626-3.39-4.954 2.473-4.954 6.138 1.858 6.597 5.042 6.597c3.184 0 3.538-3.665 3.538-3.665l6.103.366s.359 3.31-2.195 5.835-5.689 2.938-7.878 2.921c-2.189-.017-5.225.034-8.16-2.972S1.029 15.1 1.029 12.231c0-2.869.557-6.67 4.047-9.552C7.448.722 9.852 0 12.257 0c10.04 0 10.714 9.26 10.714 9.26l-6.379-.063z"/></svg>
  