<div style="width:40%;margin-top: 20px;margin-left: auto; margin-right: auto;">
<?php echo $this->Form->create('User'); ?>
<?php $list1 = array(''=>'', '1'=>'大阪', '2'=>'東京', '3'=>'名古屋', '99'=>'すべて'); ?>
<?php $list2 = array('11'=>'大阪-人材派遣　', '12'=>'大阪-住宅営業　', '21'=>'東京-人材派遣　', '22'=>'東京-住宅営業　', '31'=>'名古屋-人材派遣　', '32'=>'名古屋-住宅営業　'); ?>
    
    <fieldset style="border:none;margin-bottom: 0px;">
        <legend style="font-size: 150%;color: red;"><?php echo __('ユーザー登録をしてください。'); ?></legend>
        <table border='1' cellspacing="0" cellpadding="5" style="width:100%;margin-top: 10px;border-spacing: 1px;">
            <tr>
                <th style="width:30%;"><div class="required"><label>氏名 (姓・名)</label></div></th>
                <td style="padding-left: 5px;">
                    <?php  echo $this->Form->input('name_sei',array('label' => false,'div' => false, 'style'=>'width:40%;')); ?>
                    &nbsp;&nbsp;
                    <?php echo $this->Form->input('name_mei',array('label' => false, 'div' => false, 'style'=>'width:40%;')); ?>
                </td>   
            </tr>
            <tr>
                <th><div class="required"><label>パスワード</label></div></th>
                <td style="padding-left: 5px;"><?php echo $this->Form->input('password',array('label' => false, 'div' => false)); ?></td>   
            </tr>
            <tr>
                <th><div class=""><label>エリア</label></div></th>
                <td><?php echo $this->Form->input('area',array('label' => false, 'type' => 'select', 'options' => $list1)); ?></td>   
            </tr>
            <tr>
                <th><div class="required"><label>閲覧権限</label></div></th>
                <td>
                    <?php echo $this->Form->input('auth',array('type'=>'select','multiple' => 'checkbox', 'label' => false,'style' => 'display:inline-block', 'options' => $list2)); ?>
                </td>   
            </tr>
            <tr>
                <th><div class="required"><label>ユーザーの種類</label></div></th>
                <td>
                    <?php echo $this->Form->input('role', array('label' => false,'options' => array('user' => '一般ユーザー', 'admin' => 'システム管理者'))); ?>
                </td>   
            </tr>
        </table>

                <!--
                echo $this->Form->input('auth11',array('label' => '大阪-住宅営業', 'type' => 'checkbox'));
                echo $this->Form->input('auth12',array('label' => '大阪-人材派遣', 'type' => 'checkbox'));
                echo $this->Form->input('auth21',array('label' => '東京-住宅営業', 'type' => 'checkbox'));
                echo $this->Form->input('auth22',array('label' => '東京-人材派遣', 'type' => 'checkbox'));
                echo $this->Form->input('auth31',array('label' => '名古屋-住宅営業', 'type' => 'checkbox'));
                echo $this->Form->input('auth32',array('label' => '名古屋-人材派遣', 'type' => 'checkbox'));
                -->
    </fieldset>
    <div style='margin-left: 10px;'>
<?php echo $this->Form->submit('登録する', array('name' => 'submit','div' => false)); ?>
    &nbsp;&nbsp;
<?php print($this->Html->link('キャンセル', '/admin/index', array('id'=>'button-delete'))); ?>
    &nbsp;&nbsp;
<?php print($this->Html->link('クリア', './add', array('class'=>'button-rink'))); ?>
    </div>
<?php echo $this->Form->end(); ?>
</div>