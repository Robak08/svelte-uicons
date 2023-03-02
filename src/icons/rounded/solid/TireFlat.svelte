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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.142 20.358a1 1 0 0 1-.284-1.436c5.317-7.268.108-18.347-8.92-18.886A12.05 12.05 0 0 0 2.165 18.945c.718 1.079-.785 1.439-1.038 2.331A2.009 2.009 0 0 0 3 24h17.893a2.013 2.013 0 0 0 1.249-3.642ZM13 5.08a7.006 7.006 0 0 1 5.029 3.381L15.19 9.646A1.6 1.6 0 0 1 13 8.163Zm-1 5.556a3.2 3.2 0 0 0 1.291.869 3.674 3.674 0 0 0-.446 1.592 3.81 3.81 0 0 0-1.69 0 3.674 3.674 0 0 0-.446-1.592 3.6 3.6 0 0 0 .71-.362 3.618 3.618 0 0 0 .581-.507ZM11 5.08v3.083a1.6 1.6 0 0 1-2.185 1.486L5.956 8.485A7 7 0 0 1 11 5.08ZM7.014 16.9a7 7 0 0 1-1.807-6.565l2.63 1.073a2.128 2.128 0 0 1 .924 3.239ZM12 19a6.949 6.949 0 0 1-3.395-.883L10.4 15.8a2.053 2.053 0 0 1 3.208.011l1.78 2.31A6.958 6.958 0 0 1 12 19Zm4.981-2.089-1.733-2.249a2.127 2.127 0 0 1 .93-3.256l2.608-1.091a7 7 0 0 1-1.805 6.596Z"/></svg>
  