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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.038 8.783 24 6.649h-4.35a13.503 13.503 0 0 0-7.652-2.354c-2.841 0-5.463.868-7.637 2.354H0l1.962 2.134a5.995 5.995 0 1 0 8.115 8.829l1.922 2.092 1.922-2.091a5.998 5.998 0 0 0 10.073-4.399 5.973 5.973 0 0 0-1.956-4.431zm-16.035 8.49a4.057 4.057 0 1 1 0-8.115 4.057 4.057 0 0 1 0 8.115zM12 13.097c0-2.67-1.942-4.962-4.504-5.941a11.65 11.65 0 0 1 4.502-.901c1.596 0 3.118.321 4.504.901-2.56.981-4.502 3.271-4.502 5.941zm5.995 4.176a4.057 4.057 0 1 1-.001-8.115 4.057 4.057 0 0 1 .001 8.115zm0-6.187a2.127 2.127 0 1 0 0 4.253 2.127 2.127 0 0 0 0-4.253zM8.13 13.215a2.127 2.127 0 1 1-4.253 0 2.127 2.127 0 0 1 4.253 0z"/></svg>
  