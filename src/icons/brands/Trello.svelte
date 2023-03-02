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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path fill-rule="evenodd" d="M21.151.008H2.853A2.854 2.854 0 0 0 0 2.857v18.271c0 .753.3 1.491.831 2.025.528.53 1.275.84 2.022.84h18.298c.748 0 1.493-.312 2.019-.841a2.882 2.882 0 0 0 .83-2.023V2.857A2.853 2.853 0 0 0 21.151.008zm-10.8 17.275a.956.956 0 0 1-.961.95H5.391a.951.951 0 0 1-.946-.95v-11.9a.951.951 0 0 1 .946-.95H9.39a.951.951 0 0 1 .949.949l.012 11.901zm9.227-5.464a.95.95 0 0 1-.961.95h-3.999a.95.95 0 0 1-.949-.949V5.383a.95.95 0 0 1 .949-.949h3.999a.95.95 0 0 1 .946.95l.015 6.435z" clip-rule="evenodd"/></svg>
  