<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

App::uses('AppController', 'Controller');

/**
 * CakePHP CaseManagementController
 * @author M-YOKOI
 */
class CaseManagementController extends AppController {

    public function index() {
            // レイアウト関係
            $this->layout = "main";
            $this->set("title_for_layout","案件管理 - 派遣管理システム");
            $this->set("header_for_layout","派遣管理システム");
            $this->set("footer_for_layout",
                "copyright by SOFTLIFE. 2015.");
            // タブの状態
        $this->set('active1', '');
        $this->set('active2', '');
        $this->set('active3', '');
        $this->set('active4', 'active');
        $this->set('active5', '');
        $this->set('active6', '');
        $this->set('active7', '');
        $this->set('active8', '');
        $this->set('active9', '');
        $this->set('active10', '');
            // ユーザー名前
            $name = $this->Auth->user('name_sei').' '.$this->Auth->user('name_mei');
            $this->set('user_name', $name); 
            
        // POSTの場合
        if ($this->request->is('post')) {
            // 属性の変更
            $class = $this->request->data['class'];
            //$this->Session->setFlash($class);
            $this->set('selected_class', $class);
            $this->Session->write('selected_class', $class);
        } else {
            $this->set('selected_class', $this->Session->read('selected_class'));
        }
            
    }

}
