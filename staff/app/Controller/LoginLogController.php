<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

App::uses('AppController', 'Controller');

/**
 * CakePHP AccountController
 * @author M-YOKOI
 */
class LoginLogController extends AppController {

    public $scaffold;
    
    public function beforeFilter() {
        /* 管理権限がある場合 */
        if ($this->isAuthorized($this->Auth->user())) {
            return;
        }else{
            $this->Session->setFlash('管理者しか権限がありません。');
        }

        /* ログインまたは認証時以外の場合 */
        if ( ($this->action != 'login') && ($this->action != 'auth')) {
            $this->redirect('/users/login');
            exit();
        }
    }
 
	public function beforeRender() {
		$this->set('pluralHumanName', 'ログイン履歴'); // Scaffoldでセットしたタイトルを上書き
	}

}
