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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.084 17.442c1.171 1.169 2.987 3.847 1.037 5.679a3.015 3.015 0 0 1-4.243 0c-1.941-1.812-.136-4.486 1-5.639a1.573 1.573 0 0 1 2.206-.04Zm5.792.04c-1.137 1.158-2.938 3.826-1 5.639A3.019 3.019 0 0 0 19 21c0-1.387-1.439-3.047-1.916-3.559a1.557 1.557 0 0 0-2.208.041ZM24 12.5a7.5 7.5 0 0 1-3.527 6.35 11.325 11.325 0 0 0-1.992-2.839 3.556 3.556 0 0 0-5 .042A13.555 13.555 0 0 0 12 17.984a12.783 12.783 0 0 0-1.52-1.974 3.558 3.558 0 0 0-5 .044 10.746 10.746 0 0 0-2.217 3.466A5.543 5.543 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.056 8.056 0 0 1 8.734 4.44 1.04 1.04 0 0 0 .743.569A7.514 7.514 0 0 1 24 12.5ZM15 11c0-1.387-1.439-3.047-1.915-3.558a1.573 1.573 0 0 0-2.209.04c-1.138 1.158-2.938 3.826-1 5.639A3.019 3.019 0 0 0 15 11Z"/></svg>
  