<h1>Index Page</h1>
<p>StuffMaster Find View.</p>
<?php
  echo $this->Form->create('StuffMaster');
  echo $this->Form->input('name_sei');
  echo $this->Form->input('name_mei');
  echo $this->Form->end('Submit');
?>
 
<?php if (isset($data)): ?>
  <pre><?php print_r($data); ?></pre>
<?php endif; ?>