Here are some examples:
Using the disabled Attribute

The disabled attribute is used to indicate that an element is not available for interaction, which means it cannot be clicked or focused. This attribute can be dynamically toggled in response to certain conditions in your form to control when the user can submit the form

```
<form>
  <input type="checkbox" id="agree" onchange="document.getElementById('submitBtn').disabled = !this.checked;">
  <label for="agree">I agree to the terms and conditions</label><br>
  
  <button type="submit" id="submitBtn" disabled>Submit</button>
</form>

<script>
  document.getElementById('submitBtn').disabled = true;
</script>
```
The submit button is initially disabled. The onchange event on the checkbox checks whether the checkbox is checked. If it is, the submit button is enabled; if not, it remains disabled

--------------------
Using the onchange Attribute

The onchange attribute is generally used with input elements to run a script when the user changes the value of the input. For a submit button, this event doesn't naturally apply because submit buttons do not typically change value based on user interaction. However, you can monitor changes in other form elements and trigger actions based on those changes to control the behavior of the submit button

```
<form>
  <input type="text" id="username" onchange="checkInput()">
  <button type="submit" id="submitBtn" disabled>Submit</button>
</script>

<script>
  function checkInput() {
    var input = document.getElementById('username').value;
    document.getElementById('submitBtn').disabled = input.trim() === "";
  }

  window.onload = checkInput;
</script>
```
The checkInput function is called every time the value of the text input changes, enabling the submit button only if the input is not empty.
----------------------------
Using these techniques allows you to dynamically control the behavior of a submit button.
Enhance the forms interactivity :) 
Happy coding, Can't wait to see what everyone comes up with.