import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFields } from 'src/app/helpers/ValidatorFields';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;

  constructor(public fb: FormBuilder) { }

// Conveniente para pegar um FormField apenas com a letra f
  get f(): any { return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }
  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorFields.MustMatch('senha', 'confirmeSenha')
    };
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['',
        [Validators.required, Validators.email]
      ],
      telefone: ['', Validators.required],
      funcao: ['', Validators.required],
      userName: ['', Validators.required],
      descricao: ['',
        [Validators.required, Validators.maxLength(100)]
      ],
      senha: ['',
        [Validators.required, Validators.minLength(6)]
      ],
      confirmeSenha: ['', Validators.required],
    }, formOptions);
  }

  onSubmit(): void {

    // Vai parar aqui se o form estiver inválido
    if (this.form.invalid) {
      return;
    }
  }

  public resetForm(e: any): void {
    e.preventDefault();
    this.form.reset();
  }

}
