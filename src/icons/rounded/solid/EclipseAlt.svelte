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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 11h-3.062a7.956 7.956 0 0 0-.575-2.129l2.655-1.546A1 1 0 0 0 21.012 5.6l-2.658 1.545a8.1 8.1 0 0 0-1.507-1.5l1.541-2.648a1 1 0 0 0-1.729-1.006L15.12 4.633A7.971 7.971 0 0 0 13 4.062V1a1 1 0 0 0-2 0v3.062a7.965 7.965 0 0 0-2.108.566L7.355 1.986a1 1 0 1 0-1.728 1.006l1.536 2.641a8.046 8.046 0 0 0-1.512 1.506L3 5.6a1 1 0 0 0-1 1.725l2.64 1.54A7.955 7.955 0 0 0 4.062 11H1a1 1 0 0 0 0 2h3.062a7.957 7.957 0 0 0 .576 2.129L2 16.662a1 1 0 0 0 1.01 1.729l2.637-1.535a8.083 8.083 0 0 0 1.5 1.5L5.6 21a1 1 0 0 0 1.73 1.007l1.538-2.646a7.943 7.943 0 0 0 2.132.577V23a1 1 0 0 0 2 0v-3.062a7.934 7.934 0 0 0 2.143-.582l1.543 2.651A1 1 0 0 0 18.414 21l-1.546-2.657a8.076 8.076 0 0 0 1.49-1.494l2.647 1.541a1 1 0 0 0 1.006-1.729l-2.646-1.54A7.941 7.941 0 0 0 19.938 13H23a1 1 0 0 0 0-2Zm-9.182 5.714c-6.956 2.162-9.767-8.087-2.618-9.65a5.468 5.468 0 0 1 2.1.085.68.68 0 0 1 .3 1.148 4.618 4.618 0 0 0 .4 7.241.681.681 0 0 1-.182 1.176Z"/></svg>
  