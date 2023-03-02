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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 4.161h-5.189v3.028H24V4.161zM24 8.378h-5.189v3.028H24V8.378zM24 12.594h-5.189v3.028H24v-3.028zM5.189 16.811H0v3.028h5.189v-3.028zM11.459 16.811H6.27v3.028h5.189v-3.028zM17.73 16.811h-5.189v3.028h5.189v-3.028zM24 16.811h-5.189v3.028H24v-3.028zM17.73 12.594h-5.189v3.028h5.189v-3.028zM11.459 12.594H6.27v3.028h5.189v-3.028zM11.459 8.378H6.27v3.028h5.189V8.378z"/></svg>
  